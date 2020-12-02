let shapes = [
    {
        id: 0,
        width: 50,
        length: 50,
    }
]

let shapesId = 1

module.exports = {

    sendShapes: (req, res) => {
        res.status(200).send(shapes)
    },

    updateSpecificShape: (req, res) => {
        const { shape_key } = req.params
        const { shapeWidth, shapeLength } = req.body

        let index = shapes.findIndex((e) => e.id === +shape_key)
        shapes[index].width = +shapeWidth || shapes[index].width
        shapes[index].length = +shapeLength || shapes[index].length

        res.status(200).send(shapes)

    },

    createShape: (req, res) => {
        let newShape = {
            id: shapesId,
            width: 50,
            length: 50
        }
        shapes.push(newShape)
        shapesId++
        res.status(200).send(shapes)
    },

    totalReset: (req, res) => {
        shapes = [
            {
                id: 0,
                width: 50,
                length: 50,
            }
        ]

        shapesId = 1
        res.status(200).send(shapes)
    }

}