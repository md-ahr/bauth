export const register = (req, res) => {
    res.status(201).json({ message: "User created successfully!" });
};

export const login = (req, res) => {
    res.status(200).json({ message: "User logged in successfully!" });
};

export const getUser = (req, res) => {
    res.status(200).json({ message: `user - ${req.params}` });
};
