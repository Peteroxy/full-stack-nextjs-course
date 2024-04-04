import { graph, config,scalar } from '@grafbase/sdk'
const g = graph.Standalone()

const Project = g.type('Project', {
  title: g.string(),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy:g.ref(()=>User)
  
})



const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.ref(()=>Project).list().optional(),
})



export default config({
  graph: g,
  
  auth: {
    
    rules: (rules) => {
      rules.public()
    },
  },
  
})


