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
    },
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
    },
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
    },
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
    },
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
    },
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
  ])
};
