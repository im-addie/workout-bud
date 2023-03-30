/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('exercises').insert([
    {
      name: "Lateral raises",
      description: "While holding a pair of dumbbells by your side with palms facing inwards, raise the weights up in front and to your side (30 degrees) while keeping your elbows slightly bent. This will target the lateral head of the shoulders.",
      muscleGroup: "Shoulders",
      equipment: "Dumbbells"
    },
    {
      name: "Shoulder press",
      description: "While holding a pair of dumbbells or a barbell at shoulder height with palms facing forward, press the weights up and overhead, fully extending your arms, then lower it back down to starting position. This will target the anterior and lateral head of the shoulders.",
      muscleGroup: "Shoulders",
      equipment: "Dumbbells or barbell"
    },
    {
      name: "Face pulls",
      description: "Attach a rope to the cable machine and grasp it with both hands. Pull the rope or cable towards your face, keeping your elbows high and squeezing your shoulder blades together at the end of the movement. This will target the rear deltoids.",
      muscleGroup: "Shoulders",
      equipment: "Cable machine and rope attachment"
    },
    {
      name: "Rear delt flyes",
      description: "While holding a pair of dumbbells with palms facing each other, bend forward at the hips with a flat back. Raise the weights out to the sides with slightly bent elbows, keeping your shoulder blades squeezed together. This will target the rear deltoids.",
      muscleGroup: "Shoulders",
      equipment: "Dumbbells"
    },
    {
      name: "Upright row",
      description: "While holding a barbell with an overhand grip and hands slightly wider than shoulder-width apart, pull the barbell up to your chin, keeping it close to your body, then lower the barbell back down to starting position. This will target the anterior and lateral head of the shoulders.",
      muscleGroup: "Shoulders",
      equipment: "Barbell"
    },
    {
      name: "Front raises",
      description: "While holding a pair of dumbbells with palms facing you, keep your arms straight and raise the weights up and out in front of you to shoulder height, then lower the weights back down to starting position. This will target the anterior head of the shoulders.",
      muscleGroup: "Shoulders",
      equipment: "Dumbbells"
    }
  ]);
};
