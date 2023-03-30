/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').insert([
    {
      name: "Dumbbell curls",
      description: "Hold a dumbbell in each hand and curl the weights towards your shoulders using your biceps.",
      muscleGroup: "Biceps",
      equipment: "Dumbbells"
    },
    {
      name: "EZ Bar curls",
      description: "Using an EZ bar, curl the weight towards your shoulders using your biceps.",
      muscleGroup: "Biceps",
      equipment: "EZ Bar"
    },
    {
      name: "Hammer curls",
      description: "Hold a dumbbell in each hand with a neutral grip (palms facing each other) and curl the weights towards your shoulders using your biceps.",
      muscleGroup: "Biceps",
      equipment: "Dumbbells"
    },
    {
      name: "Preacher curls",
      description: "Using a preacher bench, curl a barbell, EZ Bar, or dumbbell towards your shoulders using your biceps. The preacher bench should be supporting your arms and isolate the biceps.",
      muscleGroup: "Biceps",
      equipment: "Preacher bench and barbell (or dumbbells/EZ Bar)"
    },
    {
      name: "Concentration curls",
      description: "While sitting on a bench, rest your elbow on your working side against the inside of your leg. Then, curl the dumbbell towards your shoulder using your bicep.",
      muscleGroup: "Biceps",
      equipment: "Dumbbell and bench"
    },
    {
      name: "Cable curls",
      description: "Attach a handle to a cable machine and curl the weight towards your shoulders using your biceps.",
      muscleGroup: "Biceps",
      equipment: "Cable machine"
    },
    {
      name: "Face away curls",
      description: "Standing and facing away from a cable machine, curl the weight towards your shoulder using your bicep.",
      muscleGroup: "Biceps",
      equipment: "Cable machine"
    }
  ]);
};
