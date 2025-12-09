import Icon from '../ui/Icon';

const contactDetails = [
  {
    icon: 'location_on',
    label: 'Address',
    value: '123 Tech Avenue, Suite 100\nInnovate City, CA 94103',
  },
  {
    icon: 'call',
    label: 'Phone',
    value: '+1 (234) 567-890',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'hello@protech.com',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8 fade-up stagger">
      <div className="space-y-4">
        <h3 className="text-white text-xl font-bold">
          Contact Information
        </h3>
        
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <Icon name={detail.icon} className="text-primary mt-1" />
            <div>
              <p className="text-slate-400 whitespace-pre-line">
                {detail.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Map placeholder */}
      <div 
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB30xN3wqSI7Pnz4CYWWfPblxZa2azacSpEhhEButL2asi_ACYq60nmH29tikacNlWB3RaVJxScbxvRCHfc0KWdiDLDN8qyXG5SqjQHY6gNrZjzdtNeQZZ6e__DGQ3bSno0Vks16dzq4X9d9-ajQx5X8Yh6aLiFtJlptafIfHdaRjeQ2-Cf8dq0IexBRZ82j5R6OjJ35cNG_7vBwtzcLchjXF-7tg7XYg1_JI9FygAZrWHK6M80TkZBFppAhAk9PhunKGajttcGCrtL")'
        }}
      />

      {/* Social links */}
      <div className="flex items-center gap-3">
        {['linkedin', 'twitter', 'github'].map((social) => (
          <a
            key={social}
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors"
            aria-label={social}
          >
            <Icon name={social} className="text-base" />
          </a>
        ))}
      </div>
    </div>
  );
}
