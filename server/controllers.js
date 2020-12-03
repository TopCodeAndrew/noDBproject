let shapes = [
    {
        id: 0,
        width: 150,
        length: 150,
        color: "green"
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
        const { shapeColor } = req.query

        let index = shapes.findIndex((e) => e.id === +shape_key)

        const originalColor = shapes[index].color

        shapes[index].width = +shapeWidth || shapes[index].width
        shapes[index].length = +shapeLength || shapes[index].length
        shapes[index].color = shapeColor || shapes[index].color


        res.status(200).send(shapes)

    },

    createShape: (req, res) => {

        let randomOne = Math.floor(Math.random() * 300) + 10
        let randomTwo = Math.floor(Math.random() * 300) + 10

        let randomColor = () => {
            let colorArray = [null, "red", "blue", "green", "yellow", "purple", "cyan", "pink", "orange", "greenyellow", "aqua", "brown", "coral", "firebrick", "hotpink", "indianred"]

            const randomIndex = Math.floor(Math.random() * (colorArray.length - 1)) + 1;

            let selectColor = colorArray[randomIndex]

            console.log(selectColor)

            return selectColor
        }

        let newColor = randomColor()

        let newShape = {
            id: shapesId,
            width: randomOne,
            length: randomTwo,
            color: newColor
        }

        console.log(randomOne, randomTwo, randomColor)
        shapes.push(newShape)
        shapesId++
        res.status(200).send(shapes)
    },

    totalReset: (req, res) => {
        shapes = [
            {
                id: 0,
                width: 150,
                length: 150,
                color: "green"
            }
        ]

        shapesId = 1
        res.status(200).send(shapes)
    }

}