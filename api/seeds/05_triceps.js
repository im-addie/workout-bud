/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').insert([
    {
      name: "Tricep rope pushdowns",
      description: "Using a rope attachment to a cable machine, stand facing toward it with your arms at 90 degrees. Then, push the rope down and out to your sides until your arms are straight.",
      muscleGroup: "Triceps",
      equipment: "Cable machine and rope attachment"
    },
    {
      name: "V-bar pushdowns",
      description: "Using a V-bar attachment to a cable machine, stand facing toward it with your arms at 90 degrees. Then, push the rope down until your arms are straight.",
      muscleGroup: "Triceps",
      equipment: "Cable machine and V-bar"
    },
    {
      name: "Dumbbell tricep extensions",
      description: "Holding a dumbbell with a straight arm above your head, lower the weight to the back of your head. Then, extend your arms upwards back to starting position.",
      muscleGroup: "Triceps",
      equipment: "Dumbbell"
    },
    {
      name: "Diamond push-ups",
      description: "In a plank position with your hands placed together to form a diamond shape using your index and thumb, keep your elbows close to your body, and lower yourself to the ground until your chest touches the ground. Then, push back up to starting position with straight arms.",
      muscleGroup: "Triceps",
      equipment: "None"
    },
    {
      name: "Dips",
      description: "Using parallel bars, lower your body by bending your elbows and leaning forward. When your arms are at a 90-degree angle, push yourself back up to starting position.",
      muscleGroup: "Triceps",
      equipment: "Parallel bars"
    },
    {
      name: "Skullcrushers",
      description: "While lying on a bench, hold a Triceps bar or EZ bar above your head with your arms straight, lower the weight towards your forehead, then lift it back to the starting position.",
      muscleGroup: "Triceps",
      equipment: "Bench and triceps bar/EZ bar"
    },
    {
      name: "Cable overhead rope extensions",
      description: "While facing away from the cable machine, hold the rope with both hands behind your head, and then extend your arms upwards until your arms are straight.",
      muscleGroup: "Triceps",
      equipment: "Cable machine and rope attachment"
    }
  ]);
};
