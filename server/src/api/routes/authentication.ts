import express, { Request, Response } from 'express';

const router = express.Router()

const mockDatabase = [
    { username: "ramsey", password: "gavin" },
    { username: "", password: "" },
    { username: "", password: "" },
    { username: "", password: "" },
]


router.post("/", async (req: Request, res: Response) => {
    // Hash the password

    // compare hashed password againt db password

    // return cookie
    const { username, password } = req.body
    try {
        const foundElement = mockDatabase.find(item => item.username === username && item.password === password)
        if (!foundElement) return res.status(403).send({ message: "Forbidden" })
        return res.json({ data: { ...foundElement, expireTime: Date.now() } })
    } catch (error) {
        return res.send(error)
    }
})

module.exports = router