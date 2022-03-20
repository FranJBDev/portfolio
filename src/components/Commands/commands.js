/* eslint-disable import/no-anonymous-default-export */
// import getcat from "../../utils/cat"
// import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nI'ḿ a Henry Full Stack Web Developer graduate.\n Skills: JavaScript, HTML, CSS, JSX, TypeScript,\n Node, React, Redux, Express, Jquery, AJAX,\nSequelize and more..n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/Gandhymann', '_blank')
                return "opening twitter handle..."
            }
        },
        facebook: {
            description: 'Opens my facebook profile.',
            usage: 'facebook',
            fn: () => {
                window.open('https://www.facebook.com/fcojimb', '_blank')
                return "opening facebook profile..."
            }
        },
        youtube: {
            description: 'Opens my youtube channel.',
            usage: 'youtube',
            fn: () => {
                window.open('https://www.youtube.com/c/Gandhyman', '_blank')
                return "opening youtube channel..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/gandhyman', '_blank')
                return "opening github account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are some languages I know.\n---\n
                    english          - 70%
                    spanish          - Native
                    React            - 90%
                    c++              - 00%
                    python           - 60%
                    javascript       - 80%
                    html5            - 90%
                    css3             - 80%
                    c#               - 50%
                    sql              - 90%
                    sequelize        - 80%
                    java             - [learning]
                    react native     - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 00%
                    making-playlists - 100%
                    gaming           - 300%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'Pokemon App'                      | 'Using pokemon Api'                  | 'ReactJS'
                    'Buyme App'                        | 'Ecommerce - Henry's final project'  | 'ReactJS'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Night Owl\n
                    Font  : Default
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/gandhyman/portfolio", '_blank')
                return "opening repository..."
            }
        },
        // spotify: {
        //     description: 'Get info about my recently played song.',
        //     usage: 'spotify',
        //     fn: async () => {
        //         const item = await getnp()
        //         return `
        //             Now Playing/Recently Played\n
        //             ---\n
        //             Song: ${item.song}\n
        //             Artist: ${item.artist}\n---\n
        //         `
        //     }
        // }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
