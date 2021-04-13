import React from 'react'
import './ProjectGallery.css'
import reactIcon from './static_assets/icons8-react-160.png'
import { Grid, Paper, makeStyles, Avatar } from '@material-ui/core'
import firebaseIcon from './static_assets/icons8-firebase-144.png'
import nodejsIcon from './static_assets/icons8-nodejs-144.png'
import cIcon from './static_assets/icons8-c-programming-144-1.png'
import cppIcon from './static_assets/icons8-c++-144.png'
import openGLIcon from './static_assets/opengl.png'
import ethereumIcon from './static_assets/icons8-ethereum-144.png'
import solidityIcon from './static_assets/solidity.png'
import pythonIcon from './static_assets/python.png'
import covidImg from './static_assets/covid19app.PNG'
import amazonImg from './static_assets/amazon.PNG'
import vmmanagerImg from './static_assets/vmmanager.PNG'
import BlockchainImg from './static_assets/Blockchain1.jpg'
import FilesystemImg from './static_assets/filesystem.png'
import NetflixImg from './static_assets/netflix.PNG'
import MeshReducerImg from './static_assets/meshreducer.webp'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 800,
      width: 550,
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    control: {
      padding: theme.spacing(2),
    },
}));




function ProjectGallery() {

    const classes = useStyles();

    const ReactIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='react-icon' src={reactIcon}/>
    </div>

    const FirebaseIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='firebase-icon' src={firebaseIcon}/>
    </div>

    const NodejsIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='nodejs-icon' src={nodejsIcon}/>
    </div>

    const CIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='c-icon' src={cIcon}/>
    </div>

    const CppIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='cpp-icon' src={cppIcon}/>
    </div>

    const OpenGLIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='opengl-icon' src={openGLIcon}/>
    </div>

    const EthereumIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='ethereum-icon' src={ethereumIcon}/>
    </div>

    const SolidityIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='solidity-icon' src={solidityIcon}/>
    </div>

    const PythonIcon = <div>
        <Avatar className='projectGallery__TechIcon' style={{background: '#edffff', margin: 'auto', width: '60px', height: '60px', border: '4px solid lightgray', backgroundColor: 'white', objectFit: 'contain', marginRight: 40, marginLeft: 40}} alt='python-icon' src={pythonIcon}/>
    </div>

    const projects = [
        {
            projectTitle: 'Virtual Machine Manager',
            description: 'This was an internal tool developed to help with server management. Functionality ranges from executing and terminating processes on a server, changing the DNS, getting the DNS, and reserving servers for rigorous usage for a specific time period.',
            imgLink: vmmanagerImg,
            icons: [ReactIcon, NodejsIcon, PythonIcon]
        },
        {
            projectTitle: 'Amazon Clone',
            description: "Developed a clone of Amazon matching the UI and UX as much as possible and including user authentication and checkout ability using StripeJS.",
            githubLink: 'https://github.com/devonmcdonald00/amazon-clone',
            imgLink: amazonImg,
            icons: [ReactIcon, FirebaseIcon, NodejsIcon]
        },
        {
            projectTitle: 'Blockchain CLI Project for Facilitation of ML',
            description: "Researched and helped develop an application with both a CLI and GUI that utilized blockchain technology to facilitate the execution of ML between users. The basic idea was to allow users with an interest in ML that didn't have the processing power needed to get their foot in the door by using the higher processing power of workers.",
            imgLink: BlockchainImg,
            icons: [EthereumIcon, SolidityIcon, NodejsIcon]
        },
        {
            projectTitle: 'Netflix Clone',
            description: 'Developed a clone of Netflix mimicking the UI and functionality of their webpage.',
            githubLink: 'https://github.com/devonmcdonald00/netflix-clone-project',
            imgLink: NetflixImg,
            icons: [ReactIcon, FirebaseIcon, NodejsIcon]
        },
        {
            projectTitle: 'C File System',
            imgLink: FilesystemImg,
            description: 'Implemented a bare bones Unix file system in C using superblock and i-node metadata. Functionality included creating files, checking if files exist, opening files, reading contents of files, closing files, and deleting files.',
            githubLink: 'https://github.com/devonmcdonald00/FileSystem',
            icons: [CIcon]
        },
        {
            projectTitle: 'C++ OpenGL Mesh Reducer',
            imgLink: MeshReducerImg,
            description: "This project aimed to parallelize the reduction of faces of a mesh. This is useful because it allows quick reduction of faces that reach a certain depth that don't need the level of detail as faces closer in depth, in turn making rendering much more scalable. We were able to parallelize this process and reduce our meshes in a fraction of the time of the sequential implementation.",
            githubLink: 'https://github.com/devonmcdonald00/LSUOpenGLProject',
            icons: [CppIcon, OpenGLIcon]
        },
        {
            projectTitle: 'Covid-19 Tracker',
            imgLink: covidImg,
            description: 'Developed a Covid-19 tracker that has functionality to view cases, recoveries and deaths for specific countries and for specific states when in state mode.',
            githubLink: 'https://github.com/devonmcdonald00/covid-19-Tracker',
            icons: [ReactIcon, FirebaseIcon, NodejsIcon]
        },
        
        
    ]

    return (
        <div className='projectGallery'>
            <Grid item spacing={10} >
                <Grid container justify="center" spacing={10} style={{marginTop: 20, marginBottom: 20}}>
                {projects.map((project, i) => (
                    <Grid key={i} item>
                    <Paper className={classes.paper}>
                        <h1 className='projectGallery__Title'>{project['projectTitle']}</h1>
                        <img
                            src={project['imgLink']}
                            alt='project-picture'
                            className='projectGallery__Img'
                            style={project['projectTitle'] === 'C++ OpenGL Mesh Reducer' ? {height: 280, width: 280} : {}}
                        />
                        <h1 className='projectGallery__Description'>{project['description']}</h1>
                        <h1 className='projectGallery__TechnologiesUsed'>Technologies Used 
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                                {
                                    project["icons"].map((icon) => (
                                        icon
                                    ))
                                }
                            </div>
                        </h1>
                        {project['githubLink'] && <h1 className='projectGallery__Link'><a href={project['githubLink']}>Github Repo Link</a></h1>}
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectGallery
