/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').insert([
    {
      name: "Barbell squats",
      description: "With a weighted barbell on your shoulders, squat down until your thighs are parallel to the ground, and then stand back up to starting position. This would target the quadriceps, glutes, and hamstrings.",
      muscleGroup: "Legs",
      equipment: "Barbell, weight plates, and squat rack"
    },
    {
      name: "Front squats",
      description: "With the weighted barbell held across the front of your shoulders. Squat down until your thighs are parallel to the ground, and then stand back up to starting position. This would target the quadriceps, glutes, and hamstrings.",
      muscleGroup: "Legs",
      equipment: "Barbell, weight plates, and squat rack"
    },
    {
      name: "Leg press",
      description: "While sitting on the leg press machine with your feet on the platform lower the weight until your knees are at a 90-degree angle then press it away from your body using your legs, back to starting position. This would target the quadriceps, glutes, and hamstrings.",
      muscleGroup: "Legs",
      equipment: "Leg press machine"
    },
    {
      name: "Lunges",
      description: "Step forward with one leg and lower your body until both knees are bent at a 90-degree angle, then stand back up and repeat with the other leg. This would target the quadriceps, glutes, and hamstrings.",
      muscleGroup: "Legs",
      equipment: "None, but dumbbells or a weighted barbell can be used for extra resistance"
    },
    {
      name: "Deadlifts",
      description: "With a weighted barbell on the ground, keep a straight back and lift the weight until you are in an upright position. Then, lower it back to starting position. This would target the glutes and hamstrings as well as lower back and traps.",
      muscleGroup: "Legs",
      equipment: "Barbell and weighted plates"
    },
    {
      name: "Machine leg curls",
      description: "While sitting on a leg curl machine, your knees should be locked in by the pad. Then, curl the weight with your heels towards yourself. This would target the hamstrings.",
      muscleGroup: "Legs",
      equipment: "Leg curl machine"
    },
    {
      name: "Machine leg extensions",
      description: "While sitting on the leg press, position your legs with the weighted pads on the top of your ankles. Then, extend your legs until they are straight. This would target the quadriceps.",
      muscleGroup: "Legs",
      equipment: "Leg extension machine"
    },
    {
      name: "Calf raises",
      description: "While standing on a raised platform, with your heels hanging off the edge, lift your heels as high as possible then lower them back to starting position. This would target the calves.",
      muscleGroup: "Legs",
      equipment: "None, but dumbbells or a weighted barbell can be used for extra resistance"
    },
    {
      name: "Romanian deadlifts",
      description: "While holding a barbell in front of you with a shoulder-width grip, hinge at your hips and slowly lower the bar down your legs until you feel a stretch in your hamstrings. Then, squeeze your glutes and lift the bar back up to a standing position while keeping your back straight. This would target the hamstrings and glutes.",
      muscleGroup: "Legs",
      equipment: "Weighted barbell or dumbbells"
    }
  ]);
};
