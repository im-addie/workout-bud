/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').insert([
    {
      name: "Barbell bench press",
      description: "Using a weighted barbell, lift it off the rack and lower it to your sternum. Then, push it back up to arm's length.",
      muscleGroup: "Chest",
      equipment: "Barbell, weights, and bench"
    },
    {
      name: "Dumbbell bench press",
      description: "Using a pair of dumbbells, lower the weight straight down until your wrists are in line sternum then push them back up to arm's length.",
      muscleGroup: "Chest",
      equipment: "Dumbbells and bench"
    },
    {
      name: "Incline bench press",
      description: "A variation of the bench press where the bench is set at an incline (30-45 degree angle). Holding a barbell or dumbbells, lower the weight to your sternum then push them back to arm's length.",
      muscleGroup: "Chest",
      equipment: "Bench and barbell/dumbbells"
    },
    {
      name: "Push-ups",
      description: "Start in a plank position with hands placed slightly wider than shoulder-width apart and feet together. While keeping your elbows close to your body, lower yourself to the ground until your chest almost touches the ground. Then, push back up to starting position with straight arms.",
      muscleGroup: "Chest",
      equipment: "None"
    },
    {
      name: "Machine chest flys",
      description: "To use the chest fly machine, have your back pressed against the pad and have your palms in a neutral position (palms facing together). With slightly bent elbows, push the handles out toward the center of your chest and then return to starting position.",
      muscleGroup: "Chest",
      equipment: "Chest fly machine"
    },
    {
      name: "Dips",
      description: "Using parallel bars, lower your body by bending your elbows and leaning forward. When your arms are at a 90-degree angle, push yourself back up to starting position.",
      muscleGroup: "Chest",
      equipment: "Parallel bars"
    },
    {
      name: "Machine chest press",
      description: "Using a chest press machine, use your arms to push the handles away from your chest.",
      muscleGroup: "Chest",
      equipment: "Chest press machine"
    }
  ]);
};
