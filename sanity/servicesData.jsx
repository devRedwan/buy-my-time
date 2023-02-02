const fs = require('fs')

const services = [
  {
    id: 491,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/997260939135025223/1063550099176816661/nura_two_men_sitting_in_silence_realistic_art_8k_fe5d0a7b-917e-4b2f-9e37-933fa486417f.png',
    price: 50,
    title: 'Buddy for sitting in silence',
    description:
      'Spend time with me in quiet companionship. No talking necessary. Just sit and be present with each other.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 3000,
    likes: 1657,
    rating: 5.0,
  },
  {
    id: 712,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/997260939135025223/1063553760716136598/nura_two_happy_friends_conversing_while_waiting_at_the_doctors__34ab4f94-b7ad-42b8-8cbc-3303cc8af1e2.png',
    title: "Companionship for a doctor's appointment",
    price: 40,
    description: 'Accompany you to your medical appointment and provide emotional support.',
    seller: {
      id: 85869845,
      name: 'Bob Marley',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/prWFj0W0/vince-fleming-j3lf-Jn6deo-unsplash.png',
    },
    visits: 1000,
    likes: 879,
    rating: 4.8,
  },
  {
    id: 316,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/997260939135025223/1063561080493834331/nura_two_smiling_people_having_a_good_time_in_a_waiting_room_wi_9d0ba5b6-dfe2-4ea9-b5da-1648040ae9a2.png',
    title: 'Wait at the DMV',
    price: 50,
    description:
      "Keep you company while you wait at the DMV. I'll bring something to do and keep you company to make the time pass more quickly.",
    seller: {
      id: 85869845,
      name: 'Bob Marley',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/prWFj0W0/vince-fleming-j3lf-Jn6deo-unsplash.png',
    },
    visits: 3500,
    likes: 3200,
    rating: 4.7,
  },
  {
    id: 128,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063568007353335908/NMadness444_young_man_happy_coversation_with_an_old_lady_highly_1604c351-2f60-4098-8f87-6c2863b19bfe.png',
    title: 'Senior citizen companion',
    price: 20,
    description:
      'Offer my time as a companion for a senior citizen. I can provide conversation or just be present for some company.',
    seller: {
      id: 85869845,
      name: 'Bob Marley',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/prWFj0W0/vince-fleming-j3lf-Jn6deo-unsplash.png',
    },
    visits: 2200,
    likes: 1851,
    rating: 5.0,
  },
  {
    id: 902,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063570650079436840/NMadness444_therapy_session_with_two_people_therapist_sitting_b_ab3035ba-b063-4c24-a57f-e962f468f17b.png',
    title: 'Support person for a therapy session',
    price: 20,
    description:
      "Provide support and companionship during a therapy session. I'll be there to listen and offer a supportive presence.",
    seller: {
      id: 85869845,
      name: 'Bob Marley',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/prWFj0W0/vince-fleming-j3lf-Jn6deo-unsplash.png',
    },
    visits: 1500,
    likes: 140,
    rating: 4.7,
  },
  {
    id: 647,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063569179891994775/NMadness444_two_people_comforting_each_other_while_speaking_to__19f6472a-e47f-4986-88b8-baf17648775d.png',
    title: 'Support person during a difficult time',
    price: 30,
    description:
      "Offer my time and support during a difficult time. If you just need someone to listen, I'm here for you.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 4000,
    likes: 600,
    rating: 5.0,
  },
  {
    id: 390,
    serviceImageUrl: 'https://media.tenor.com/s8-6ZHt_BicAAAAM/david-rose-hiking.gif',
    title: 'Hiking or walking companion',
    price: 60,
    description:
      "Accompany you on a hike or walk. I'll bring water and a snack and be there to keep you company and enjoy the outdoors with you.",
    seller: {
      id: 85869845,
      name: 'Bob Marley',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/prWFj0W0/vince-fleming-j3lf-Jn6deo-unsplash.png',
    },
    visits: 2800,
    likes: 295,
    rating: 5.0,
  },
  {
    id: 569,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063583832055496725/NMadness444_man_enjoying_himself_in_a_wedding_full_of_people_ma_ee023146-2864-4057-b613-dcbf24d4a73b.png',
    title: 'Stand-in for a wedding or event',
    price: 40,
    description: "Be a stand-in for you at a wedding or event. I'll fill in as needed.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 1800,
    likes: 146,
    rating: 4.7,
  },
  {
    id: 832,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063585873087701052/NMadness444_two_friends_waiting_at_the_airport_waiting_area_smi_5a368ea6-dc63-41d2-954d-ce01ef48d173.png',
    title: 'Airport wait companion',
    price: 50,
    description:
      "Keep you company while you wait at the airport. I'll bring something to do and keep youcompany to make the time pass more quickly.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 5500,
    likes: 4500,
    rating: 5.0,
  },
  {
    id: 123,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063588193854836816/NMadness444_a_smiling_young_person_extending_his_hand_on_anothe_28b2aea6-b9f8-423b-94f2-6b78bb99be03.png',
    title: 'Companion for someone feeling lonely',
    price: 60,
    description:
      "Provide companionship for someone feeling lonely. I'll be there to listen and offer a supportive presence.",
    seller: {
      id: 25462897,
      name: 'Carl Mourinho',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/vmSYh3tq/olawale-munna-Objhzjn-Mmc-unsplash.png',
    },
    visits: 2600,
    likes: 204,
    rating: 4.7,
  },
  {
    id: 798,
    serviceImageUrl:
      'https://www.gm.com/content/dam/company/img/us/en/vehicle-safety/safety_periscope_PC3_whatweknow1.gif',
    title: 'Long car ride companion',
    price: 80,
    description:
      'Accompany you on a long car ride and provide conversation or just be present for some company.',
    seller: {
      id: 25462897,
      name: 'Carl Mourinho',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/vmSYh3tq/olawale-munna-Objhzjn-Mmc-unsplash.png',
    },
    visits: 12300,
    likes: 968,
    rating: 5.0,
  },
  {
    id: 456,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063603304912920596/renybaby_a_young_acquaintance_sitting_in_a_chair_beside_a_sick__51577005-3eb2-4888-9fb0-9a8f5e09423e.png',
    title: 'Companion for someone who is ill',
    price: 40,
    description:
      "Offer my time and companionship for someone who is ill. I'll be there to listen and offer a supportive presence.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 100,
    likes: 70,
    rating: 4.8,
  },
  {
    id: 654,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063597662760357938/renybaby_two_people_talking_to_one_another_in_a_deep_conversati_aeb0a5ea-ff20-40ef-82a0-79dad6eacb7d.png',
    price: 90,
    title: 'A professional confidant',
    description:
      "Listen and offer support as a confidant. I'll be there to listen and offer a supportive presence.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 2000,
    likes: 1690,
    rating: 5.0,
  },
  {
    id: 321,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/981697648119648266/1063593465193173042/NMadness444_a_person_bringing_a_plus_one_to_a_social_event_high_fe1d93c1-a17a-4d7a-b3df-da9557353800.png',
    title: 'Plus one for a social event',
    price: 80,
    description:
      "Serve as a plus one for a social event. I'll be there to keep you company and participate in activities.",
    seller: {
      id: 25462897,
      name: 'Carl Mourinho',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/vmSYh3tq/olawale-munna-Objhzjn-Mmc-unsplash.png',
    },
    visits: 1600,
    likes: 1030,
    rating: 4.8,
  },
  {
    id: 876,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063597064350605312/renybaby_enjoying_a_movie_in_the_theater_with_a_buddy_shocked_e_25d9ce07-55fa-44ee-81ad-eaed347aeb36.png',
    title: 'Movie companion',
    price: 50,
    description:
      'Accompany you to a movie and provide conversation or just be present for some company.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 4300,
    likes: 377,
    rating: 5.0,
  },
  {
    id: 934,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063596686494146680/renybaby_person_pushing_a_shopping_cart_through_a_supermarket_a_40efd90b-58d8-4923-b12e-32167811492d.png',
    title: 'Shopping trip companion',
    price: 60,
    description:
      'Accompany you on a shopping trip and provide conversation or just be present for some company.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 2900,
    likes: 2495,
    rating: 5.0,
  },
  {
    id: 568,
    serviceImageUrl:
      'https://i.postimg.cc/85vMRJgY/imgonline-com-ua-twotoone-25-Xae0-Rm-Jy-Nax-IXw.png',
    title: 'Line stand-in',
    price: 100,
    description:
      'Stand in line for you and keep you updated on the wait time, while you enjoy yourself at homoe.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 1900,
    likes: 1570,
    rating: 5.0,
  },
  {
    id: 345,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063604730334556282/renybaby_a_person_helping_another_person_move_furnitures_highly_580e1484-7aff-4d18-bb2c-da990d822285.png',
    title: 'Moving companion',
    price: 130,
    description: 'Accompany you during a move and provide minimal assistance as needed.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 4900,
    likes: 485,
    rating: 5.0,
  },
  {
    id: 129,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063606639057444924/renybaby_two_friends_enjoying_a_soccer_match_in_a_stadium_full__95cc72e2-afde-4e6b-9076-a073061adbc1.png',
    title: 'Sporting event companion',
    price: 50,
    description:
      'Accompany you to a sporting event and provide conversation or just be present for some company.',
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 2700,
    likes: 310,
    rating: 5.0,
  },
  {
    id: 257,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/989739585158389760/1063609208358060082/renybaby_two_people_in_casual_clothing_practicing_a_job_intervi_72200524-6c47-46e1-b57d-e8c76b5154c7.png',
    title: 'Mock interview partner for a job seeker',
    price: 60,
    description:
      "Offer my time as a mock interview partner for job seekers. I'll help you practice and prepare for job interviews.",
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 1300,
    likes: 189,
    rating: 4.8,
  },
  {
    id: 873,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063624101735968878/Needmdns_a_young_programmer_giving_interview_to_three_people_po_3fa5333f-1397-420f-b047-88b7bb6edff3.png',
    title: 'Invite me to interview (Special Promo)',
    price: 0,
    description: `Invite me to an interview for your company's development role. Excited to offer my services as an interview candidate 😉. I learn quick, make an invaluable addition to any team. Free of charge b/c my character, skills and talent  speak for themselves. Let's talk.`,
    seller: {
      id: 73317331,
      name: 'Redwan Ahmed',
      sellerRating: 5.0,
      sellerImageUrl: 'https://i.postimg.cc/x12tFnd7/IMG-1874.jpg',
    },
    visits: 4600,
    likes: 3965,
    rating: 5.0,
  },
  {
    id: 432,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063623129961857034/Needmdns_a_friendly_chat_over_coffee_between_two_people_smiles__fc3663a7-f1b6-4a3a-b751-b5bfcb6fd265.png',
    title: 'Friendly chat over coffee',
    price: 20,
    description:
      "Spend some time chatting over coffee. I'll be a friendly and attentive companion.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 1500,
    likes: 100,
    rating: 4.8,
  },
  {
    id: 567,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063623555062968380/Needmdns_two_people_waiting_on_a_single_line_of_people_highly_d_9805fe1e-0741-4e1d-9898-d48bff6f5204.png',
    price: 20,
    title: 'A friend while you wait',
    description:
      "Provide a waiting service. I'll sit or stand with you while you wait for an appointment or event.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 1700,
    likes: 50,
    rating: 4.6,
  },
  {
    id: 789,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063625417858236567/Needmdns_two_people_talking_and_hiking_over_a_mountain_with_a_g_0dc8e001-851d-4d30-8ff5-643ebc6903cf.png',
    title: 'Accompaniment for a walk or hike',
    price: 25,
    description:
      "Accompany you for a walk or hike. I'll keep you company and enjoy the outdoors with you.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 1900,
    likes: 60,
    rating: 4.1,
  },
  {
    id: 234,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063626599871815710/Needmdns_two_people_sitting_relaxing_highly_detailed_8k_2d2972af-3e17-467a-91ba-2dfa445413fb.png',
    title: 'Sit-in service',
    price: 15,
    description: "Provide a sit-in service. I'll sit with you while you rest or take a break.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 2100,
    likes: 150,
    rating: 4.3,
  },
  {
    id: 466,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063626296535564288/Needmdns_two_people_enjoying_a_meal_together_serene_happy_frien_69611bc5-4a46-4760-ba14-c56f8e1b9794.png',
    title: 'Accompaniment for a meal',
    price: 100,
    description: "Accompany you for a meal. I'll keep you company and enjoy a meal with you.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 2300,
    likes: 180,
    rating: 4.3,
  },
  {
    id: 678,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063627188252987422/Needmdns_two_people_in_their_20s_holding_glasses_in_a_open_yard_f89ed663-a802-48c8-ac9a-aa6e9ee5aa31.png',
    title: 'Accompaniment for an event or outing',
    price: 110,
    description:
      "Accompany you for an event or outing. I'll keep you company and participate in activities with you.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 2500,
    likes: 1790,
    rating: 4.5,
  },
  {
    id: 901,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816772108202044/1063628482929770546/Needmdns_two_people_traveling_through_a_lively_and_crowded_city_90f082ee-f493-4e8b-88db-20a7a06ec4cd.png',
    title: 'Accompaniment for travel',
    price: 120,
    description:
      "Accompany you for travel. I'll keep you company and make your trip more enjoyable.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 2700,
    likes: 1900,
    rating: 4.5,
  },
  {
    id: 346,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063632590629777469/needmadnes33_one_person_teaching_another_person_something_sitti_97affa48-c72b-45ac-919b-703d4b54852b.png',
    title: 'Conversation practice',
    price: 90,
    description: "Offer conversation practice. I'll listen and engage in conversation with you.",
    seller: {
      id: 87654321,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    visits: 2200,
    likes: 1600,
    rating: 4.5,
  },
  {
    id: 651,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063634376849629194/needmadnes33_two_people_sitting_on_the_couch_and_watching_tv_tv_1ff1b756-feb1-410a-97a3-97055562b522.png',
    title: 'Accompaniment for a TV show marathon',
    price: 50,
    description:
      "Accompany you for a TV show marathon. I'll keep you company and enjoy the entertainment with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 180,
    likes: 120,
    rating: 4.5,
  },
  {
    id: 752,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063631700858519573/needmadnes33_group_of_young_adults_doing_game_nights_board_game_fc5e72e8-0d11-4764-b071-09ada78ff99a.png',
    title: 'Accompaniment for a game night',
    price: 60,
    description:
      "Accompany you for a game night. I'll keep you company and participate in the games with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 270,
    likes: 180,
    rating: 4.2,
  },
  {
    id: 853,
    serviceImageUrl:
      'https://memphismagazine.com/downloads/10998/download/dreamstime_50016982.jpg?cb=d2360a4c624d6ac03686affc2680e4c8&w=1000',
    title: 'Accompaniment for a book club meeting',
    price: 70,
    description:
      "Accompany you for a book club meeting. I'll keep you company and participate in the discussion with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 360,
    likes: 240,
    rating: 4.2,
  },
  {
    id: 954,
    serviceImageUrl:
      'https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg',
    title: 'Accompaniment for a yoga or exercise class',
    price: 80,
    description:
      "Accompany you for a yoga or exercise class. I'll keep you company and participate in the class with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 450,
    likes: 300,
    rating: 4.9,
  },
  {
    id: 65,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063634805465563136/needmadnes33_two_friends_taking_a_baking_class_happy_smiling_ca_2006cd62-3551-4ca2-863f-a2e861d255c9.png',
    title: 'Accompaniment for a cooking or baking class',
    price: 90,
    description:
      "Accompany you for a cooking or baking class. I'll keep you company and participate in the class with you.",
    seller: {
      id: 75395130,
      name: 'Jane Smith',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 540,
    likes: 360,
    rating: 4.9,
  },
  {
    id: 176,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063635612789383249/needmadnes33_two_friends_enjoying_a_painting_class_with_other_p_c3c8b1a2-b1a3-4869-a854-f85cc899a560.png',
    title: 'Accompaniment for a painting or drawing class',
    price: 100,
    description:
      "Accompany you for a painting or drawing class. I'll keep you company and participate in the class with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 630,
    likes: 420,
    rating: 4.6,
  },
  {
    id: 287,
    serviceImageUrl:
      'https://static01.nyt.com/images/2021/02/03/arts/03fiveminutes-quartet/03fiveminutes-quartet-superJumbo.gif',
    title: 'Accompaniment for a music or dance class',
    price: 110,
    description:
      "Accompany you for a music or dance class. I'll keep you company and participate in the class with you.",
    seller: {
      id: 75395130,
      name: 'Marlin Reddington',
      sellerRating: 4.0,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 720,
    likes: 480,
    rating: 4.6,
  },
  {
    id: 398,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/990816819654852648/1063637076878311534/needmadnes33_people_looking_over_different_items_at_a_large_mus_eb33c5c0-2aa0-4b83-9c2c-5b41833e08fe.png',
    title: 'Company for a museum visit',
    price: 50,
    description:
      "Provide company during a museum visit. I'll keep you company and enjoy the exhibits with you.",
    seller: {
      id: 12345678,
      name: 'Alice Smith',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/N07d1z8T/IMG-2042.jpg',
    },
    visits: 190,
    likes: 130,
    rating: 4.6,
  },
  {
    id: 721,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063648800566165604/nmad4355_lifelike_slight_smile_8k_58bb1147-252f-4ee8-9793-13c02006fa93.png',
    title: 'Company for a spa day',
    price: 80,
    description: "Provide company during a spa day. I'll keep you company and relax with you.",
    seller: {
      id: 12345678,
      name: 'Alice Smith',
      sellerRating: 4.5,
      sellerImageUrl: 'https://i.postimg.cc/N07d1z8T/IMG-2042.jpg',
    },
    visits: 460,
    likes: 310,
    rating: 5.0,
  },
  {
    id: 276,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063644869777686628/nmad4355_two_people_walking_along_a_park_path_talking_happy_smi_909dd669-7643-4eba-8281-46eac264b2ad.png',
    title: 'Companion for a park visit',
    price: 50,
    description:
      "Provide sitting companionship during a park visit. I'll spend time with you and enjoy the scenery.",
    seller: {
      id: 23456789,
      name: 'Kevin Johnson',
      sellerRating: 4.5,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 200,
    likes: 140,
    rating: 5.0,
  },
  {
    id: 387,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063645115337408612/nmad4355_two_people_enjoying_the_ocean_view_on_a_beach_sitting__d4916d03-840e-45c2-aacb-e835b7184375.png',
    title: 'Sitting companion for a beach visit',
    price: 60,
    description:
      "Provide sitting companionship during a beach visit. I'll sit with you and enjoy the ocean view.",
    seller: {
      id: 23456789,
      name: 'Kevin Johnson',
      sellerRating: 4.5,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 290,
    likes: 200,
    rating: 4.9,
  },
  {
    id: 498,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063648762674827295/nmad4355_two_people_sitting_on_top_of_mountain_looking_at_scena_19a91468-e33c-4fcb-9b54-8ec0bd42ada3.png',
    title: 'Sitting companion for a mountain view',
    price: 70,
    description:
      "Provide sitting companionship with a mountain view. I'll sit with you and enjoy the scenery.",
    seller: {
      id: 23456789,
      name: 'Kevin Johnson',
      sellerRating: 4.5,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 380,
    likes: 260,
    rating: 4.9,
  },
  {
    id: 599,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063649321469366343/nmad4355_two_people_walking_through_a_beautiful_garden_smiling__62d95b81-4a32-4cf9-b15d-a73b274b06e6.png',
    title: 'Go for a garden visit with me',
    price: 80,
    description:
      "Provide companionship during a garden visit. I'll hang out with you and enjoy the plants and flowers.",
    seller: {
      id: 23456789,
      name: 'Kevin Johnson',
      sellerRating: 4.5,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    visits: 470,
    likes: 320,
    rating: 5.0,
  },
  {
    id: 186,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063650212679274496/nmad4355_two_girls_having_a_coversation_over_tea_happy_smile_ca_d13ffd63-25ed-496d-95ea-0bfda2d9f57c.png',
    title: 'Conversation over tea',
    price: 50,
    description: "Have a conversation over a cup of tea. I'll listen and talk with you.",
    seller: {
      id: 34567890,
      name: 'Charlie Williams',
      sellerRating: 4.3,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    visits: 210,
    likes: 150,
    rating: 4.4,
  },
  {
    id: 577,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063651655985401968/nmad4355_one_person_is_virtually_showing_around_a_city_to_anoth_5d2ac9d9-2b9b-40d7-9018-a533d0237e7e.png',
    title: 'Virtual tour guide',
    price: 60,
    description:
      "Serve as a virtual tour guide for a city or location. I'll share information and show you around through a video call.",
    seller: {
      id: 34567890,
      name: 'Charlie Williams',
      sellerRating: 4.3,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    visits: 300,
    likes: 210,
    rating: 4.4,
  },
  {
    id: 978,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063651797979381860/nmad4355_two_people_practicing_together_learning_different_lang_26df1c1c-3ea6-4fc9-b49b-960b136d0f24.png',
    title: 'Language practice partner',
    price: 70,
    description:
      "Serve as a language practice partner. I'll help you practice and improve your language skills.",
    seller: {
      id: 34567890,
      name: 'Charlie Williams',
      sellerRating: 4.3,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    visits: 390,
    likes: 270,
    rating: 5.0,
  },
  {
    id: 789,
    serviceImageUrl:
      'https://cdn.discordapp.com/attachments/1008571084225912872/1063653150625640558/nmad4355_working_out_or_exercising_with_a_partner_a_video_call__e86eea78-310b-4b9e-8c79-867f84bf67d8.png',
    title: 'Virtual workout buddy',
    price: 80,
    description:
      "Serve as a virtual workout buddy. I'll exercise with you and motivate you through a video call.",
    seller: {
      id: 34567890,
      name: 'Charlie Williams',
      sellerRating: 4.3,
      sellerImageUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    visits: 480,
    likes: 330,
    rating: 4.4,
  },
]

const servicesJSON = JSON.stringify(services, null, 2)
fs.writeFileSync('services.json', servicesJSON)
