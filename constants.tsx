
import { Course } from './types';

export const WHATSAPP_1 = "+917777035528";
export const WHATSAPP_2 = "+919082051687";
export const EMAIL = "riversaviationacademy@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/rivers_aviation_academy?igsh=eWo4cW1kN3FsYWhi&utm_source=qr";

export interface EnhancedCourse extends Course {
  imageUrl: string;
}

export const COURSES: EnhancedCourse[] = [
  {
    id: 'cabin-crew',
    title: 'Cabin Crew Training',
    description: 'Comprehensive grooming and safety training for international and domestic airlines. Master the art of in-flight hospitality.',
    duration: '6 Months',
    icon: 'fa-plane-up',
    category: 'Flight',
    imageUrl: 'https://images.unsplash.com/photo-1506010233735-e92fb973229f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ground-staff',
    title: 'Ground Staff Excellence',
    description: 'Master airport operations, check-in procedures, and ramp management. The backbone of airport efficiency.',
    duration: '4 Months',
    icon: 'fa-suitcase-rolling',
    category: 'Ground',
    imageUrl: 'https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'customer-service',
    title: 'Excellence in Passenger Handling',
    description: 'Advanced hospitality and conflict resolution training for premium services. Create memorable journeys.',
    duration: '3 Months',
    icon: 'fa-users',
    category: 'Ground',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bba-aviation',
    title: 'BBA in Aviation Management',
    description: 'A professional degree focusing on airline management and airport operations. Build a foundation in aviation business.',
    duration: '3 Years',
    icon: 'fa-graduation-cap',
    category: 'Management',
    imageUrl: 'https://images.unsplash.com/photo-1544015759-3376001740e5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mba-aviation',
    title: 'MBA in Aviation Management',
    description: 'Strategic leadership and global logistics for senior aviation roles. Lead the future of global connectivity.',
    duration: '2 Years',
    icon: 'fa-briefcase',
    category: 'Management',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1524850041227-6177e10df241?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&q=80&w=1200'
];

export const SYSTEM_INSTRUCTION = `
You are the AI Admission Counselor for Rivers Aviation Academy.
Our academy offers courses in:
- Cabin Crew Training
- Ground Staff Excellence
- Excellence in Passenger Handling & Customer Service
- BBA in Aviation Management
- MBA in Aviation Management

Contact Details:
- Email: ${EMAIL}
- WhatsApp 1: +91 7777035528
- WhatsApp 2: +91 9082051687
- Instagram: ${INSTAGRAM_URL}

Your tone should be professional, encouraging, and helpful. 
Help students understand which course fits them based on their interests. 
If they ask for specific details not mentioned, encourage them to fill out the inquiry form or message us on WhatsApp.
`;
