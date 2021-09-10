// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
    {
        title: 'Java',
        competency: 5,
        category: ['Web Development', 'Backend Development', 'Language'],
    },
    {
        title: 'SQL',
        competency: 5,
        category: ['Language', 'Database'],
    },
    {
        title: 'Spring Framework',
        competency: 5,
        category: ['Web Development', 'Framework'],
    },
    {
        title: 'Spring Boot',
        competency: 5,
        category: ['Web Development', 'Framework'],
    },
    {
        title: 'JPA',
        competency: 5,
        category: ['Backend Development', 'Library'],
    },
    {
        title: 'Jenkins',
        competency: 5,
        category: ['Tools', 'DevOps'],
    },
    {
        title: 'Docker',
        competency: 5,
        category: ['Tools', 'DevOps'],
    },
    {
        title: 'Git',
        competency: 4,
        category: ['Tools'],
    },
    {
        title: 'Oracle Database',
        competency: 4,
        category: ['Database'],
    },
    {
        title: 'Redis',
        competency: 4,
        category: ['Database'],
    },
    {
        title: 'JavaScript',
        competency: 3,
        category: ['Web Development', 'Language'],
    },
    {
        title: 'Python',
        competency: 3,
        category: ['Data Science', 'Language'],
    },
    {
        title: 'Shell Scripting',
        competency: 3,
        category: ['Tools', 'Language'],
    },
    {
        title: 'ReactJS',
        competency: 3,
        category: ['Web Development', 'Framework'],
    },
    {
        title: 'Spring Batch',
        competency: 3,
        category: ['Backend Development', 'Framework'],
    },
    {
        title: 'Hibernate',
        competency: 3,
        category: ['Backend Development', 'Library'],
    },
    {
        title: 'MyBatis',
        competency: 4,
        category: ['Backend Development', 'Library'],
    },
    {
        title: 'Gradle',
        competency: 3,
        category: ['Tools'],
    },
    {
        title: 'MySQL',
        competency: 3,
        category: ['Database'],
    },
    {
        title: 'MariaDB',
        competency: 3,
        category: ['Database'],
    },
    {
        title: 'AWS EC2',
        competency: 3,
        category: ['Cloud', 'DevOps'],
    },
    {
        title: 'AWS ECS',
        competency: 3,
        category: ['Cloud', 'DevOps'],
    },
    {
        title: 'AWS ELB',
        competency: 3,
        category: ['Cloud', 'DevOps'],
    },
    {
        title: 'RabbitMQ',
        competency: 3,
        category: ['Tools'],
    },
    {
        title: 'Apache Kafka',
        competency: 3,
        category: ['Tools'],
    },
    {
        title: 'Pandas',
        competency: 3,
        category: ['Library', 'Data Science'],
    },
    {
        title: 'Html & CSS',
        competency: 2,
        category: ['Language', 'Web Development'],
    },
    {
        title: 'Spring Cloud',
        competency: 3,
        category: ['Framework', 'Web Development'],
    },
    {
        title: 'ELK Stack',
        competency: 2,
        category: ['Tools'],
    },
    {
        title: 'MongoDB',
        competency: 2,
        category: ['Database'],
    },
    {
        title: 'Postgres',
        competency: 2,
        category: ['Database'],
    },
    {
        title: 'Scikit Learn',
        competency: 2,
        category: ['Data Science', 'Machine Learning'],
    },
    {
        title: 'Tensorflow',
        competency: 2,
        category: ['Data Science', 'Machine Learning'],
    },
    {
        title: 'Hadoop',
        competency: 2,
        category: ['Data Engineering'],
    },
    {
        title: 'Impala',
        competency: 2,
        category: ['Data Engineering'],
    },
    {
        title: 'Apache Spark',
        competency: 2,
        category: ['Data Engineering'],
    },
    {
        title: 'Numpy',
        competency: 2,
        category: ['Data Science'],
    },
].map((skill) => ({...skill, category: skill.category.sort()}));


// const skills = [
//   {
//     title: 'Javascript',
//     competency: 4,
//     category: ['Web Development', 'Languages', 'Javascript'],
//   },
//   {
//     title: 'Node.JS',
//     competency: 3,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'React',
//     competency: 3,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'Bash',
//     competency: 2,
//     category: ['Tools', 'Languages'],
//   },
//   {
//     title: 'Amazon Web Services',
//     competency: 4,
//     category: ['Web Development', 'Tools'],
//   },
//   {
//     title: 'Heroku',
//     competency: 2,
//     category: ['Web Development', 'Tools'],
//   },
//   {
//     title: 'MongoDB',
//     competency: 3,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'ElasticSearch',
//     competency: 2,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'PostgreSQL/SQLite3/SQL',
//     competency: 4,
//     category: ['Web Development', 'Databases', 'Languages'],
//   },
//   {
//     title: 'Redis',
//     competency: 3,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'Data Mining',
//     competency: 3,
//     category: ['Data Science'],
//   },
//   {
//     title: 'Express.JS',
//     competency: 2,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'D3',
//     competency: 2,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'Flask',
//     competency: 2,
//     category: ['Web Development', 'Python'],
//   },
//   {
//     title: 'Git/Mercurial',
//     competency: 3,
//     category: ['Tools'],
//   },
//   {
//     title: 'Kubernetes',
//     competency: 2,
//     category: ['Tools', 'Data Engineering'],
//   },
//   {
//     title: 'Google Cloud Compute',
//     competency: 2,
//     category: ['Tools', 'Web Development'],
//   },
//   {
//     title: 'Numpy',
//     competency: 3,
//     category: ['Data Science', 'Data Engineering', 'Python'],
//   },
//   {
//     title: 'Numba',
//     competency: 2,
//     category: ['Data Science', 'Data Engineering', 'Python'],
//   },
//   {
//     title: 'Tensorflow + Keras',
//     competency: 3,
//     category: ['Data Science', 'Python'],
//   },
//   {
//     title: 'Jupyter',
//     competency: 3,
//     category: ['Data Science', 'Python'],
//   },
//   {
//     title: 'Typescript',
//     competency: 2,
//     category: ['Web Development', 'Languages', 'Javascript'],
//   },
//   {
//     title: 'HTML + SASS/SCSS/CSS',
//     competency: 3,
//     category: ['Web Development', 'Languages'],
//   },
//   {
//     title: 'Python',
//     competency: 5,
//     category: ['Languages', 'Python'],
//   },
//   {
//     title: 'C++',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'Julia',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'MATLAB',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'R',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'Data Visualization',
//     competency: 3,
//     category: ['Data Science', 'Javascript'],
//   },
//   {
//     title: 'GraphQL',
//     competency: 2,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'Pandas',
//     competency: 5,
//     category: ['Data Engineering', 'Data Science', 'Python'],
//   },
//   {
//     title: 'Matplotlib',
//     competency: 3,
//     category: ['Data Engineering', 'Data Science', 'Python'],
//   },
//   {
//     title: 'Scikit-Learn',
//     competency: 4,
//     category: ['Data Engineering', 'Data Science', 'Python'],
//   },
//   {
//     title: 'Hadoop',
//     competency: 2,
//     category: ['Data Engineering', 'Data Science'],
//   },
//   {
//     title: 'Spark',
//     competency: 2,
//     category: ['Data Engineering', 'Data Science'],
//   },
//   {
//     title: 'Dagster',
//     competency: 2,
//     category: ['Data Engineering', 'Python'],
//   },
//   {
//     title: 'Mypy',
//     competency: 3,
//     category: ['Python'],
//   },
//   {
//     title: 'Pylint',
//     competency: 4,
//     category: ['Data Engineering', 'Python'],
//   },
// ].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
    '#6968b3',
    '#37b1f5',
    '#40494e',
    '#515dd4',
    '#e47272',
    '#cc7b94',
    '#3896e2',
    '#c3423f',
    '#d75858',
    '#747fff',
    '#64cb7b',
];

const categories = [
    ...new Set(skills.reduce((acc, {category}) => acc.concat(category), [])),
]
    .sort()
    .map((category, index) => ({
        name: category,
        color: colors[index],
    }));

export {categories, skills};
