export const hospitals = [
  {
    id: 'h1',
    name: 'CityHeart Multispecialty Hospital',
    city: 'Bengaluru',
    area: 'Koramangala',
    address: '14th Cross Road, Koramangala 4th Block, Bengaluru, Karnataka 560034',
    type: 'Multispecialty',
    description: 'A leading multispecialty hospital in Bengaluru offering world-class cardiac care, orthopedics, and advanced surgical facilities with a patient-first approach.',
    specialties: ['cardiology', 'orthopedics', 'neurology', 'general-medicine', 'gastroenterology'],
    facilities: ['24/7 Emergency Care', 'Advanced ICU', 'Cardiac Catheterization Lab', 'Physiotherapy Center', 'In-house Pharmacy', 'MRI & CT Scan'],
    image: '/hospitals/hospital-1.jpg',
    mapLink: 'https://maps.google.com/?q=Koramangala+Bengaluru',
    doctors: ['d1', 'd2', 'd5'],
    lat: 12.9352,
    lng: 77.6245,
  },
  {
    id: 'h2',
    name: 'GreenLeaf Women & Child Hospital',
    city: 'Bengaluru',
    area: 'Indiranagar',
    address: '100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
    type: 'Specialty',
    description: 'Dedicated to women\'s health and pediatric care, GreenLeaf provides compassionate and comprehensive services for mothers and children.',
    specialties: ['gynecology', 'pediatrics', 'dermatology', 'endocrinology'],
    facilities: ['Neonatal ICU', 'Labour & Delivery Suites', 'Pediatric Emergency', 'Vaccination Center', 'Ultrasound & Diagnostics'],
    image: '/hospitals/hospital-2.jpg',
    mapLink: 'https://maps.google.com/?q=Indiranagar+Bengaluru',
    doctors: ['d3', 'd4'],
    lat: 12.9784,
    lng: 77.6408,
  },
  {
    id: 'h3',
    name: 'NeuroVista Institute',
    city: 'Delhi',
    area: 'Saket',
    address: 'Press Enclave Road, Saket, New Delhi, Delhi 110017',
    type: 'Specialty',
    description: 'A premier neurosciences institute offering cutting-edge brain and spine care with internationally trained neurologists and neurosurgeons.',
    specialties: ['neurology', 'psychiatry', 'general-medicine', 'ophthalmology'],
    facilities: ['Neuro ICU', 'Brain Mapping Lab', 'EEG & EMG Lab', 'Rehabilitation Center', 'MRI Suite', 'Counseling Center'],
    image: '/hospitals/hospital-3.jpg',
    mapLink: 'https://maps.google.com/?q=Saket+New+Delhi',
    doctors: ['d6', 'd11'],
    lat: 28.5244,
    lng: 77.2066,
  },
  {
    id: 'h4',
    name: 'Pinnacle Super Specialty Hospital',
    city: 'Delhi',
    area: 'Dwarka',
    address: 'Sector 12, Dwarka, New Delhi, Delhi 110078',
    type: 'Multispecialty',
    description: 'A state-of-the-art super specialty hospital equipped with advanced robotic surgery, comprehensive cancer care, and one of the finest cardiac centers in North India.',
    specialties: ['cardiology', 'orthopedics', 'gastroenterology', 'ent', 'dermatology', 'endocrinology'],
    facilities: ['Robotic Surgery Suite', 'Cardiac Catheterization Lab', 'Endoscopy Center', 'Blood Bank', 'Pathology Lab', 'Helipad'],
    image: '/hospitals/hospital-4.jpg',
    mapLink: 'https://maps.google.com/?q=Dwarka+New+Delhi',
    doctors: ['d7', 'd8', 'd12'],
    lat: 28.5921,
    lng: 77.0460,
  },
  {
    id: 'h5',
    name: 'Mountain View General Hospital',
    city: 'Dehradun',
    area: 'Rajpur Road',
    address: 'Rajpur Road, Near Clock Tower, Dehradun, Uttarakhand 248001',
    type: 'General',
    description: 'A trusted community hospital in Dehradun providing reliable general medicine, pediatric care, and essential surgical services with a warm, family-friendly atmosphere.',
    specialties: ['general-medicine', 'pediatrics', 'orthopedics', 'ent', 'ophthalmology'],
    facilities: ['General Surgery OT', 'X-Ray & Ultrasound', 'Pharmacy', 'Emergency Ward', 'Blood Testing Lab'],
    image: '/hospitals/hospital-5.jpg',
    mapLink: 'https://maps.google.com/?q=Rajpur+Road+Dehradun',
    doctors: ['d9', 'd10'],
    lat: 30.3165,
    lng: 78.0322,
  },
  {
    id: 'h6',
    name: 'Panchkula Eye & ENT Center',
    city: 'Chandigarh',
    area: 'Panchkula',
    address: 'Sector 9, Panchkula, Haryana 134109',
    type: 'Specialty',
    description: 'Specialized center for advanced eye care and ENT treatments, known for LASIK procedures, cataract surgeries, and hearing restoration.',
    specialties: ['ophthalmology', 'ent'],
    facilities: ['LASIK Suite', 'Audiology Lab', 'Microscopic Surgery OT', 'Optical Dispensary', 'Diagnostic Lab'],
    image: '/hospitals/hospital-6.jpg',
    mapLink: 'https://maps.google.com/?q=Panchkula+Chandigarh',
    doctors: ['d13', 'd14'],
    lat: 30.6942,
    lng: 76.8606,
  },
  {
    id: 'h7',
    name: 'Wellness First Hospital',
    city: 'Chandigarh',
    area: 'Sector 32',
    address: 'Sector 32-B, Chandigarh 160030',
    type: 'Multispecialty',
    description: 'A modern multispecialty hospital in the heart of Chandigarh, combining compassionate care with advanced medical technology across a wide range of specialties.',
    specialties: ['cardiology', 'gynecology', 'dermatology', 'psychiatry', 'gastroenterology', 'general-medicine'],
    facilities: ['Cardiac ICU', 'Dermatology Laser Center', 'Counseling Wing', 'Endoscopy Suite', 'Women\'s Wellness Center', 'Cafeteria'],
    image: '/hospitals/hospital-7.jpg',
    mapLink: 'https://maps.google.com/?q=Sector+32+Chandigarh',
    doctors: ['d15', 'd16'],
    lat: 30.7333,
    lng: 76.7794,
  },
  {
    id: 'h8',
    name: 'Horizon Children\'s Hospital',
    city: 'Bengaluru',
    area: 'Whitefield',
    address: 'ITPL Main Road, Whitefield, Bengaluru, Karnataka 560066',
    type: 'Specialty',
    description: 'A dedicated children\'s hospital providing specialized pediatric care, neonatal services, and child-friendly treatment environments.',
    specialties: ['pediatrics', 'general-medicine', 'ent', 'dermatology'],
    facilities: ['Pediatric ICU', 'Neonatal Care Unit', 'Child-friendly OPD', 'Play Therapy Room', 'Vaccination Center', 'Allergy Testing Lab'],
    image: '/hospitals/hospital-8.jpg',
    mapLink: 'https://maps.google.com/?q=Whitefield+Bengaluru',
    doctors: ['d4', 'd17'],
    lat: 12.9698,
    lng: 77.7500,
  },
];

export const cities = ['Bengaluru', 'Delhi', 'Dehradun', 'Chandigarh'];
export const hospitalTypes = ['Multispecialty', 'Specialty', 'General'];

export function getHospitalById(id) {
  return hospitals.find(h => h.id === id);
}

export function getHospitalsByCity(city) {
  if (!city) return hospitals;
  return hospitals.filter(h => h.city.toLowerCase() === city.toLowerCase());
}

export function getHospitalsBySpecialty(specialtyId) {
  if (!specialtyId) return hospitals;
  return hospitals.filter(h => h.specialties.includes(specialtyId));
}

export function filterHospitals({ city, area, specialty, name, type }) {
  return hospitals.filter(h => {
    if (city && h.city.toLowerCase() !== city.toLowerCase()) return false;
    if (area && !h.area.toLowerCase().includes(area.toLowerCase())) return false;
    if (specialty && !h.specialties.includes(specialty)) return false;
    if (name && !h.name.toLowerCase().includes(name.toLowerCase())) return false;
    if (type && h.type !== type) return false;
    return true;
  });
}
