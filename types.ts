
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  category: 'Ground' | 'Flight' | 'Management';
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
