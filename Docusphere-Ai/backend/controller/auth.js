const User = require('../models/user');
const bcrypt = require('bcrypt');
exports.login = async (req, res) => {
    try {
        // Extract credentials
        const { email, password } = req.body;
        
        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password"
            });
        }
        
        // Find user by email
        const user = await User.findOne( {email})
    
        
        // Check if user exists
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist, please sign up first"
            });
        }
        
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        
        // Generate JWT token
        const payload = {
            email: user.email,
            id: user._id,
        };
        
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h"
        });
        
        // Add token to user object for response
        user.token = token;
        // Don't send password in response
        user.password = undefined;
        
        // Set cookie for token
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
            httpOnly: true
        };
        
        // Send response with cookie
        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged in successfully"
        });
        
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Login failed",
            error: error.message
        });
    }
};

// singup 


exports.signUp = async (req, res) => {
    //data fetching from the body
    //validate the data
    //password matching
    //check if the user already exists

    //find most recent OTP for this email
    //check if the OTP is valid

    //hash the password
    //create the user
    //send the response
     
    try {
        const { firstName, lastName, email, password, confirmPassword, contactNumber, accountType, otp } = req.body;
       
        // Validate required fields
        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !otp) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be provided"
            });
        }
        
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        
        // Check password matching
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }
        
        // Find the most recent OTP for this email
        const otpRecord = await OTP.findOne({ 
            email, 
            otp 
        }).sort({ createdAt: -1 }).limit(1);
        
        console.log("OTP record found:", otpRecord);
        
        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }
        
        // Check OTP expiration (10 minutes)
        const now = new Date();
        const otpCreatedAt = new Date(otpRecord.createdAt);
        const tenMinutesInMs = 10 * 60 * 1000;
        
        if (now - otpCreatedAt > tenMinutesInMs) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired. Please request a new one."
            });
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Set approval status based on account type
        let approved = accountType === "Instructor" ? false : true;
        
        try {
            // Create the Additional Profile For User with ALL required fields
            const profileDetails = await Profile.create({
                gender: "Not specified",
                dob: new Date(), // Current date
                about: "No information provided",
                phone: contactNumber || "Not provided", 
                location: "Not specified",
                education: "Not specified"
            });
            
            // Create user with correct Image field (capital I)
            const user = await User.create({
                firstName,
                lastName,
                email,
                contactNumber: contactNumber || "",
                password: hashedPassword,
                accountType,
                approved,
                additionalDetails: profileDetails._id,
                Image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}` // Capital I to match schema
            });
            
            // Delete the used OTP
            await OTP.deleteOne({ _id: otpRecord._id });
            
            // Return success response
            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    accountType: user.accountType,
                    image: user.Image
                }
            });
            
        } catch (profileError) {
            console.error("Error creating profile or user:", profileError);
            return res.status(500).json({
                success: false,
                message: "Failed to create profile or user",
                error: profileError.message
            });
        }
        
    } catch (error) {
        console.error('Error signing up:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to sign up',
            error: error.message
        });
    }
};