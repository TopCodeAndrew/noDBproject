
let shapes = [
    {
        id: 0,
        width: 150,
        length: 150,
        color: "green",
        name: "Lil Green"
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

    deleteOneShape: (req, res) => {
        const { id } = req.query
        const { shape_number } = req.params
        const index = shapes.findIndex((e) => e.id === +id)
        shapes.splice(index, 1)
        console.log(`Internal Use: Shape #${shape_number} with an id of "${id}" deleted!`)
        res.status(200).send(shapes)


    },

    createShape: (req, res) => {

        let randomOne = Math.floor(Math.random() * 300) + 10
        let randomTwo = Math.floor(Math.random() * 300) + 10

        let randomColor = () => {
            let colorArray = [null, "red", "blue", "green", "yellow", "purple", "cyan", "pink", "orange", "greenyellow", "aqua", "brown", "coral", "firebrick", "hotpink", "indianred"]

            const randomIndex = Math.floor(Math.random() * (colorArray.length - 1)) + 1;

            let selectColor = colorArray[randomIndex]

            return selectColor
        }

        let newColor = randomColor()

        let diagnoseEmptyList = () => {
            let allIsWell = shapesId
            if (shapes.length === 0) {
                return 0
            } else { return allIsWell }
        }

        shapesId = diagnoseEmptyList()

        let newShape = {
            id: shapesId,
            width: randomOne,
            length: randomTwo,
            color: newColor
        }

        shapes.push(newShape)
        shapesId++
        console.log(shapes)
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
        ];

        shapesId = 1
        console.log(shapes)
        res.status(200).send(shapes)

    }

}