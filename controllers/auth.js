 export const login = (req, res) => {
     res.status(200).json({
       login: 'From controller',
     });
}

export const register = (req, res) => {
      res.status(200).json({
        register: "From controller",
      });
}