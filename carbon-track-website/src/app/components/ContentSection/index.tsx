type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section id={title.replace(/\s/g, '').toLowerCase()} style={{ marginBottom: 48 }}>
      <h2 style={{ color: '#2A4759', borderBottom: `3px solid #F79B72`, paddingBottom: 6 }}>{title}</h2>
      <div style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.6 }}>
        {children}
      </div>
    </section>
  );
}
