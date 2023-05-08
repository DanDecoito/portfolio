import React from 'react'
import Skills from './Skills'
import tailwind from '../../assets/tailwind.png'
import gitHub from '../../assets/github.png'
import postman from '../../assets/postman.png'
import figma from '../../assets/figma.png'
import githubgray from '../../assets/githubgray.png'

export default function SkillsComponent() {
    return (
        <div className='h-screen flex flex-col bg-opacity-80 w-10/12  mx-auto justify-center bg-[#182126] pt-10'>
            <h3 className='mb-20 ml-3 uppercase tracking-[20px] text-[#657374] text-center'>Skills</h3>
            <div className='grid grid-cols-4 gap-3 text-white px-8  mx-auto mb-24'>
                <Skills
                    src='https://img.icons8.com/color/96/000000/javascript--v1.png'
                    percentage='JavaScript'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/css3.png'
                    percentage='CSS3'
                />
                <Skills
                    src='https://img.icons8.com/color/48/000000/html-5--v1.png'
                    percentage='HTML5'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/nodejs.png'
                    percentage='Node.js'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/react-native.png'
                    percentage='React'
                />
                <Skills
                    src=' https://img.icons8.com/color/96/000000/bootstrap.png'
                    percentage='bootstrap'
                />
                <Skills
                    src={tailwind}
                    percentage='tailwind'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/sql.png'
                    percentage='SQL'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/azure-1.png'
                    percentage='Azure'
                />
                <Skills
                    src='https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png'
                    percentage='VS Code'
                />
                <Skills
                    src={figma}
                    percentage='Figma'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/jira.png'
                    percentage='Jira'
                />
                <Skills
                    src='https://img.icons8.com/color/96/000000/typescript.png'
                    percentage='TypeScript'
                />
                <Skills
                    src={githubgray}
                    percentage='GitHub'
                />
                <Skills
                    src='https://img.icons8.com/plasticine/100/000000/api-settings.png'
                    percentage='RESTful API'
                />
                <Skills
                    src={postman}
                    percentage='Postman'
                />
           </div>
           
        </div>
    )
}
