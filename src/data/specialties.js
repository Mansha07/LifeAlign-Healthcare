import {
  Heart, Bone, Droplets, Baby, Brain, Eye, Ear, Stethoscope,
  Smile, Apple, Pill, Activity
} from 'lucide-react';

export const specialties = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    label: 'Heart Health',
    description: 'Diagnosis and treatment of heart and cardiovascular conditions',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    keywords: ['heart', 'chest pain', 'blood pressure', 'heart attack', 'cardiac', 'palpitations', 'coronary', 'hypertension', 'cholesterol', 'angina'],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    label: 'Bone & Joint Pain',
    description: 'Treatment of bones, joints, muscles, and ligaments',
    icon: Bone,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    keywords: ['bone', 'joint', 'knee', 'back pain', 'fracture', 'spine', 'arthritis', 'hip', 'shoulder', 'sports injury', 'ligament'],
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    label: 'Skin & Hair',
    description: 'Care for skin, hair, and nail conditions',
    icon: Droplets,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    keywords: ['skin', 'rash', 'acne', 'hair loss', 'eczema', 'psoriasis', 'dermatitis', 'moles', 'skin infection', 'itching'],
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    label: "Women's Health",
    description: "Comprehensive women's reproductive health services",
    icon: Activity,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    keywords: ['women', 'pregnancy', 'menstrual', 'pcos', 'fertility', 'menopause', 'gynecology', 'obstetrics', 'prenatal'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    label: 'Child Health',
    description: 'Medical care for infants, children, and adolescents',
    icon: Baby,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    keywords: ['child', 'baby', 'infant', 'vaccination', 'pediatric', 'growth', 'development', 'newborn', 'child fever'],
  },
  {
    id: 'neurology',
    name: 'Neurology',
    label: 'Brain & Nerves',
    description: 'Treatment of brain, spinal cord, and nervous system disorders',
    icon: Brain,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    keywords: ['brain', 'headache', 'migraine', 'seizure', 'stroke', 'nerve', 'memory', 'epilepsy', 'numbness', 'dizziness', 'paralysis'],
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    label: 'Eye Care',
    description: 'Comprehensive eye care and vision correction',
    icon: Eye,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    keywords: ['eye', 'vision', 'cataract', 'glaucoma', 'eye irritation', 'blurry vision', 'lasik', 'retina', 'eye pain'],
  },
  {
    id: 'ent',
    name: 'ENT',
    label: 'Ear, Nose & Throat',
    description: 'Treatment of ear, nose, throat, and related conditions',
    icon: Ear,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    keywords: ['ear', 'nose', 'throat', 'sinus', 'hearing', 'tonsils', 'snoring', 'ear infection', 'nasal', 'voice'],
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    label: 'Digestive Health',
    description: 'Diagnosis and treatment of digestive system disorders',
    icon: Apple,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    keywords: ['stomach', 'digestion', 'liver', 'gastric', 'acidity', 'ulcer', 'constipation', 'ibs', 'abdomen', 'nausea', 'bloating'],
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    label: 'General Health',
    description: 'Primary care and general health consultations',
    icon: Stethoscope,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    keywords: ['fever', 'cold', 'flu', 'cough', 'fatigue', 'general', 'checkup', 'health', 'weakness', 'infection'],
  },
  {
    id: 'psychiatry',
    name: 'Psychiatry / Psychology',
    label: 'Mental Wellness',
    description: 'Mental health support, counseling, and psychiatric care',
    icon: Smile,
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
    keywords: ['mental health', 'anxiety', 'depression', 'stress', 'insomnia', 'therapy', 'counseling', 'ocd', 'panic', 'bipolar'],
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology',
    label: 'Diabetes & Hormones',
    description: 'Treatment of diabetes, thyroid, and hormonal disorders',
    icon: Pill,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    keywords: ['diabetes', 'thyroid', 'hormone', 'insulin', 'sugar', 'pcos', 'metabolism', 'endocrine', 'obesity'],
  },
];

export const emergencyKeywords = [
  'severe chest pain', 'heart attack', 'stroke', 'cannot breathe',
  'breathing difficulty', 'unconscious', 'seizure', 'heavy bleeding',
  'choking', 'severe burns', 'poisoning', 'suicidal', 'suicide',
  'cardiac arrest', 'anaphylaxis', 'severe allergic reaction'
];

export function searchSpecialties(query) {
  if (!query || query.trim().length === 0) return [];

  const normalizedQuery = query.toLowerCase().trim();

  // Check for emergency keywords
  const isEmergency = emergencyKeywords.some(keyword =>
    normalizedQuery.includes(keyword)
  );

  if (isEmergency) {
    return { emergency: true, specialties: [] };
  }

  const results = specialties.filter(specialty =>
    specialty.keywords.some(keyword =>
      normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
    ) ||
    specialty.name.toLowerCase().includes(normalizedQuery) ||
    specialty.label.toLowerCase().includes(normalizedQuery)
  );

  return { emergency: false, specialties: results };
}
