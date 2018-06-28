import React , { Component } from 'react'
import EditIcon from 'grommet/components/icons/base/Edit'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
class DetailCard extends Component {

    render () {
        return (
            <Box className='text-shadow' margin='none' pad={{ vertical: 'large'}} align='center' size={{width: {max: 'large'}}} separator='all'>
                <EditIcon size='xlarge'/>
                <Heading strong={true}>Small</Heading>
                <Heading tag='h3'>Primary Detail</Heading>
                <Heading tag='h3'>Secondary Detail</Heading>
                <Heading tag='h3'>Third Detail</Heading>
                
            </Box>
        )
    }
}

export default DetailCard

//Explain.
We can organize our code without iterating part
We can modularize iterating part into one module

class DetailCards extends Component {
    render () {
        return (
            <Box>
                <DetailCard/>
                <DetailCard/>
                <DetailCard/>
            </Box>
        )
    }
}
