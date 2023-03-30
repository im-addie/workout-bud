/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      name: "T-Bar row",
      description: "Using a T-bar, grip the handles with both hands and lift the weight towards you using your back.",
      muscleGroup: "Back",
      equipment: "T-bar machine and weight plates"
    },
    {
      name: "Cable row machine",
      description: "At a cable row machine, pull the cable towards your navel while seated, targeting your back.",
      muscleGroup: "Back",
      equipment: "Cable row machine"
    },
    {
      name: "Lat pulldown",
      description: "At a lat pulldown machine, pull the bar down to your upper chest while seated, targeting your latissimus dorsi muscle, also known as lats.",
      muscleGroup: "Back",
      equipment: "Lat pulldown machine"
    },
    {
      name: "Single arm lat pulldown",
      description: "A variation of the lat pulldown exercise where you pull the cable down to the side of your chest using one arm at a time, targeting each lat muscle separately.",
      muscleGroup: "Back",
      equipment: "Cable machine"
    },
    {
      name: "Barbell bent over row",
      description: "While bending forward at the hips, hold a barbell with both hands and lift the weight towards your navel using your back.",
      muscleGroup: "Back",
      equipment: "Barbell and weight plates"
    },
    {
      name: "Dumbbell rows",
      description: "In one hand, hold a dumbbell and place the opposite hand and knee on a bench. Lift the weight towards you until your wrist is in line with your navel.",
      muscleGroup: "Back",
      equipment: "Dumbbell and bench"
    },
    {
      name: "Pull-ups",
      description: "A bodyweight exercise where you grip a horizontal bar with both hands and pull your body up towards the bar until your chin is above the bar.",
      muscleGroup: "Back",
      equipment: "Pull-up bar"
    }
  ]);
};
