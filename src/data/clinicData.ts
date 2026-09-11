import { ClinicInfo, ClinicReview, DentalService } from '../types';

export const CLINIC_IMAGES = {
  // IMAGE 1: Primary hero & clinic interior
  hero: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxhzHEVQcEZqKWxy6XsUmCmv9FCOlFBl6MqiDkUTBgUuuEzu4O2QqD8DSdjWkubrr_ii0xF1aTG07umf_a2Ym1iOdZnyrW44VEkAjOPJ-l_3Knc4ro5jGo0Kg6s_a-0wSVoAhq=s423-k-no',
  
  // IMAGE 2: Modern dental operatory chair & equipment
  cleaningChair: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkevfQxh1Z7kz2YJDJO57qYUDQtqWUfzTZsgWEJCE3sWFqlwXs_aMpBlYhE7whlklTq5SfXIJUQH0jTei4-hKW8lOuIv-AAcfQOCH9BPR5QriHZkQXIDfjyNGjtDgMJcATK_i03=s338-k-no',
  
  // IMAGE 3: Treatment consultation zone
  treatmentZone: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCUL_6hjMnoIB9MzXFbzK6NXpIWaseJv275piqB0IFlk9MdeK9GbPllzaGLzjZnyr6TZGZEAiLo1zJkOuQbztLDq1TFpbt7q8xmRPNv92odycNcEfCHeb7hpcmKDz_TxcllQs=s564-k-no',
  
  // IMAGE 4: Clinic exterior & entrance
  entrance: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAyAM8-s3Mvl4I7IIkL0RODBiaXpa2eZNyUiydILg9NNiEjcKDY6Y3obe_v2Id8yUmYlah0MAGmWixOvsEbky-pGUplYJ-U-8R15jiGdpinrCC5cZ3wouEn7mUQo3igXqLStk=s282-k-no',
  
  // IMAGE 5: Interior treatment room & ambiance
  interiorRoom: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmL6jV6MDSGsOSiukWaPrvMgC5ZuzhXrdsNkoTeD2KkY1LyUCr20iPbjugWUvsx8ehWfL2o3G2oYscxKJrwy0qMGWMmGju8tY0HDiNl27TdJdKTVDIHwPYFRZuf5XKbbpyU9lo=s564-k-no',
  
  // IMAGE 6: Clinical setup & operator environment
  clinicalSetup: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkV1mldQwT_pSqNDIx47lnbtzZfRkJgmAd-c_YSWCSAM027IJu-7g3pFz4aRG6UQMCgsE4m_7-6reNRJAHToggj6v4UjNpQat2-I6VlqwV4zHo3nINlIDScPvbozTNB99qE7U_amX_OyFSw=s423-k-no',
};

export const CLINIC_DATA: ClinicInfo = {
  name: 'My Family Clinic',
  bengaliName: 'মি ফ্যামেলী ক্লিনিক',
  category: 'Dentist · Dental Clinic',
  address: '121, Purbachal Main Rd, opposite Tata Croma, East Purbachal, Kalikapur, Haltu',
  landmark: 'Opposite Tata Croma',
  locality: 'Kalikapur, Haltu',
  city: 'Kolkata, West Bengal 700078',
  phone: '090072 06671',
  phoneRaw: '09007206671',
  rating: 4.9,
  reviewCount: 30,
  hours: 'Opens at 6:00 PM',
  plusCode: 'G93W+F2 Kolkata, West Bengal',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=My+Family+Clinic+121+Purbachal+Main+Rd+opposite+Tata+Croma+Kalikapur+Haltu+Kolkata+700078',
};

export const CLINIC_REVIEWS: ClinicReview[] = [
  {
    id: 'review-1',
    author: 'SIVA SANKAR PATNAIK',
    rating: 5,
    comment: 'I found Dr Sharat is an excellent Dentist to deal with. Besides adults, he is also excellently behaved while treating the children as a Pedodontist. I wish him all success.',
    highlight: 'Excellently behaved while treating children as a Pedodontist',
  },
  {
    id: 'review-2',
    author: 'Prity Gupta',
    rating: 5,
    comment: 'Dr.megh sharat is very calm and patience. his treatment is very good..he is very polite with his patients specially kids.my son is very happy and comfortable after getting treated by him everyone should visit here.',
    highlight: 'Very calm and patient... my son is very happy and comfortable',
  },
  {
    id: 'review-3',
    author: 'Avinash Kumar Gupta',
    rating: 5,
    comment: 'Dr Megh Sharat, a very fine and experienced dentist, as well good pedodontist, holds quality of a professional dentist, calm and polite.',
    highlight: 'A very fine dentist... holds quality of a professional dentist, calm and polite',
  },
];

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'dental-cleaning',
    title: 'Dental Cleaning',
    bengaliTitle: 'ডেন্টাল ক্লিনিং',
    tagline: 'Professional scaling & polishing to protect teeth and gum tissue.',
    description: 'Professional cleaning to remove plaque and tartar and support healthier teeth and gums.',
    points: [
      'Removes persistent tartar and hardened plaque',
      'Protects gums from irritation and gingivitis',
      'Leaves breath naturally fresh and teeth polished',
    ],
  },
  {
    id: 'dental-checkup',
    title: 'Dental Check-up',
    bengaliTitle: 'নিয়মিত ডেন্টাল পরীক্ষা',
    tagline: 'Comprehensive visual and clinical assessment of your oral health.',
    description: 'Routine assessment to identify potential oral-health problems early before discomfort develops.',
    points: [
      'Early detection of minor decay and enamel wear',
      'Assessment of bite alignment and gum margins',
      'Tailored home oral hygiene advice for each individual',
    ],
  },
  {
    id: 'preventive-care',
    title: 'Preventive Dental Care',
    bengaliTitle: 'প্রতিরোধমূলক ডেন্টাল কেয়ার',
    tagline: 'Proactive therapies and guidance to safeguard natural tooth structure.',
    description: 'Care focused on maintaining healthy teeth and reducing the risk of future dental complications.',
    points: [
      'Protection against progressive enamel degradation',
      'Targeted guidance on plaque management',
      'Preservation of natural tooth strength for long-term health',
    ],
  },
  {
    id: 'family-care',
    title: 'Family Dental Care',
    bengaliTitle: 'পারিবারিক ডেন্টাল কেয়ার',
    tagline: 'A gentle, welcoming environment for children and adults alike.',
    description: 'A welcoming environment designed around comfortable dental care for families, with a calm approach that puts children at ease.',
    points: [
      'Calm, patient environment designed to alleviate anxiety',
      'Attentive pedodontic approach for children and young smiles',
      'Thoughtful care tailored across all age stages',
    ],
  },
];

export const CLEANING_BENEFITS = [
  'Helps reduce plaque buildup',
  'Supports healthier gums',
  'Helps reduce bad breath',
  'Supports cavity prevention',
  'Helps reduce risk of gum disease',
  'Provides an opportunity to identify dental problems early',
];

export const CLEANING_SIGNS = [
  'Bleeding gums during brushing or flossing',
  'Persistent bad breath that brushing cannot resolve',
  'Yellowish or brownish deposits along teeth edges',
  'Tooth sensitivity to warm or cold temperatures',
  'Visible plaque or hardened tartar near gumlines',
  'It has been a long time since your last professional cleaning',
];
