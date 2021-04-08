const router= require("express").Router()
const bcrypt= require("bcyrptjs")
const User= require("../../models")

router.post("/", async(req, res)=> {
    const {username, password}= req.body
    try {
        const user= new User({
            username, password
        })

        const salt= await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(password, salt);

        await user.save()
    } catch (error) {
        res.status(500).json({message: "Server error try again!"})
    }
})

router.get("/", async(req, res)=> {
    try {
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Server error try again!"})
    }
})