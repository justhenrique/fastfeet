module.exports = { 
  dialect: "postgres",
  host: 'localhost',
  username: 'postgres',
  password: 'docker123',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};