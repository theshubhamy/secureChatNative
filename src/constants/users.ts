export type UserWithLastMsg = {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  lastMsg: {
    text: string;
    timestamp: string;
  };
};

export const users: UserWithLastMsg[] = [
  {
    id: '1jhouyou8749ufjfi',
    name: '',
    phone: '+91 1234567890',
    avatar: 'https://example.com/avatar1.png',
    lastMsg: {
      text: 'Hey, how are you?',
      timestamp: '2025-08-31T12:00:00Z',
    },
  },
  {
    id: '2kjdue98mx98cm9',
    name: 'Jane Smith',
    phone: '+91 9876543210',
    avatar: 'https://example.com/avatar2.png',
    lastMsg: {
      text: 'Are we still on for the meeting?',
      timestamp: '2025-08-31T12:05:00Z',
    },
  },
  {
    id: '3kdmkmdkji98m090n',
    name: '',
    phone: '+91 4567891230',
    avatar: 'https://example.com/avatar3.png',
    lastMsg: {
      text: 'Did you finish the report?',
      timestamp: '2025-08-31T12:10:00Z',
    },
  },
  {
    id: '49309xn98nmxjnu',
    name: '',
    phone: '+91 3216549870',
    avatar: 'https://example.com/avatar4.png',
    lastMsg: {
      text: 'Can you send me the files?',
      timestamp: '2025-08-30T12:15:00Z',
    },
  },
  {
    id: '503nxijdu9xdknncjh',
    name: 'Charlie Davis',
    phone: '+91 6543219870',
    avatar: 'https://example.com/avatar5.png',
    lastMsg: {
      text: 'What time is our appointment?',
      timestamp: '2025-08-21T12:20:00Z',
    },
  },
  {
    id: '6097euhduunuxn33',
    name: 'David Wilson',
    phone: '+91 7890123456',
    avatar: 'https://example.com/avatar6.png',
    lastMsg: {
      text: 'Can you share the project updates?',
      timestamp: '2025-08-30T12:25:00Z',
    },
  },
  {
    id: '7iu9du98umm938n',
    name: 'Emma Thompson',
    phone: '+91 8901234567',
    avatar: 'https://example.com/avatar7.png',
    lastMsg: {
      text: 'Any updates on the design?',
      timestamp: '2025-08-01T12:30:00Z',
    },
  },
  {
    id: '8ndnk9u39x3djh',
    name: '',
    phone: '+91 9012345678',
    avatar: 'https://example.com/avatar8.png',
    lastMsg: {
      text: 'What are your thoughts on the proposal?',
      timestamp: '2025-08-01T12:35:00Z',
    },
  },
  {
    id: '9dnijxiu39ixjijx',
    name: '',
    phone: '+91 0123456789',
    avatar: 'https://example.com/avatar9.png',
    lastMsg: {
      text: 'Looking forward to your feedback.',
      timestamp: '2025-07-01T12:40:00Z',
    },
  },
  {
    id: '10dkji3xdiojdkji33',
    name: 'Henry Adams',
    phone: '+91 1231231234',
    avatar: 'https://example.com/avatar10.png',
    lastMsg: {
      text: 'Can you provide an update on the project?',
      timestamp: '2025-07-01T12:45:00Z',
    },
  },
  {
    id: '11uxdjnjnkxxjbf84',
    name: 'Isabella Martinez',
    phone: '+91 2345678901',
    avatar: 'https://example.com/avatar11.png',
    lastMsg: {
      text: 'Any updates on the design?',
      timestamp: '2025-07-01T12:50:00Z',
    },
  },
  {
    id: '12939jndjndjkjx229',
    name: 'James Wilson',
    phone: '+91 3456789012',
    avatar: 'https://example.com/avatar12.png',
    lastMsg: {
      text: 'Can you provide an update on the project?',
      timestamp: '2025-07-01T12:55:00Z',
    },
  },
  {
    id: '13dijkdjkdj9ix93',
    name: 'Michael Brown',
    phone: '+91 4561237890',
    avatar: 'https://example.com/avatar13.png',
    lastMsg: {
      text: 'Any updates on the design?',
      timestamp: '2025-07-01T12:50:00Z',
    },
  },
  {
    id: '14nkdji93930xjd93',
    name: 'Olivia Taylor',
    phone: '+91 5678901234',
    avatar: 'https://example.com/avatar14.png',
    lastMsg: {
      text: 'Any updates on the design?',
      timestamp: '2024-10-01T12:50:00Z',
    },
  },
  {
    id: '15njdkdji93i9uefn93',
    name: 'Paul Walker',
    phone: '+91 6789012345',
    avatar: 'https://example.com/avatar15.png',
    lastMsg: {
      text: 'Any updates on the design?',
      timestamp: '2024-10-01T12:50:00Z',
    },
  },
];
