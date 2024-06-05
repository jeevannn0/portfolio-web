import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend-dark.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
          'Building responsive Single Page Apps in React.js',
          'Building responsive static websites using Next.js',
          'Creating Attractive UI designs in Figma',
          ],
          softwareSkills: [
            // iconify icons: https://icon-sets.iconify.design/
            
          { name: 'html-5', icon: 'vscode-icons:file-type-html' },
          { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
          { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
          {
              name: 'typeScript',
              icon: 'vscode-icons:file-type-typescript-official',
          },
          { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
          { name: 'reactjs', icon: 'logos:react' },
          { name: 'redux', icon: 'logos:redux' },
          { name: 'nextjs', icon: 'logos:nextjs-icon' },
          { name: 'nodejs', icon: 'logos:nodejs-icon' },
          { name: 'superbase', icon: "skill-icons:supabase-dark" },
          { name: 'firebase', icon: "logos:firebase" },
          { name: 'mongodb', icon: "devicon:mongodb" },
          ],
      },
      ],
  };
  