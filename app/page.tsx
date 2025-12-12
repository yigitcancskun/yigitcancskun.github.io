'use client';

import { site } from "../content/site";
import FollowingDog from "../components/FollowingDog";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FollowingDog />
      <main className="min-h-screen">
        <div className="mx-auto max-w-2xl px-6 py-20">
        
        {/* Hero Section */}
        <header>
          <p className="text-sm tracking-wide mb-4" style={{ color: 'var(--muted)' }}>
            {site.location}
          </p>
          <div className="flex items-center gap-4 mb-3">
            <Image
              src="/profile.png"
              alt={site.name}
              width={144}
              height={144}
              className="rounded-full"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '2px solid var(--card-border)'
              }}
              priority
            />
            <h1 className="text-4xl font-semibold tracking-tight">
              {site.name}
            </h1>
          </div>
          <p className="text-xl font-light mb-6" style={{ color: 'var(--muted)' }}>
            {site.title}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {site.tagline}
          </p>

          {/* Social Links */}
          <nav className="flex flex-wrap gap-6 mt-8">
            <a className="link-hover text-sm" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link-hover text-sm" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="link-hover text-sm" href={site.links.kaggle} target="_blank" rel="noreferrer">
              Kaggle
            </a>
          </nav>
        </header>

        <div className="divider" />

        {/* About Section */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
            Hakkımda
          </h2>
          <div className="space-y-4">
            {site.about.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Currently Working Section */}
        {site.currentlyWorking && (
          <>
            <section>
              <h2 className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
                {site.currentlyWorking.title}
              </h2>
              <div className="space-y-3">
                {site.currentlyWorking.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ 
                      padding: '0.75rem',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '0.75rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--muted)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="divider" />
          </>
        )}

        {/* Skills Section */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
            Yetenekler
          </h2>
          <div className="flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Projects Section */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: 'var(--muted)' }}>
            Projeler
          </h2>
          <div className="space-y-6">
            {site.projects.map((project) => {
              // Her proje için öncelikli linki belirle
              const primaryLink = 
                project.links.kaggle || 
                (project.links as any).sample || 
                project.links.github || 
                project.links.demo || 
                (project.links as any).presentation || 
                '#';
              
              // Link türüne göre renk belirle
              const getLinkStyle = () => {
                if (project.links.kaggle) {
                  return {
                    background: 'linear-gradient(135deg, #20BEFF 0%, #1B9FD9 100%)',
                    icon: '🏆',
                    label: 'Kaggle'
                  };
                } else if ((project.links as any).sample) {
                  return {
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    icon: '📄',
                    label: 'Örnek Çalışma'
                  };
                } else if (project.links.github) {
                  return {
                    background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                    icon: '💻',
                    label: 'GitHub'
                  };
                } else if (project.links.demo) {
                  return {
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    icon: '🚀',
                    label: 'Demo'
                  };
                }
                return { background: 'var(--card-bg)', icon: '', label: '' };
              };

              const linkStyle = getLinkStyle();

              return (
                <a 
                  key={project.name} 
                  href={primaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card block transition-all duration-200"
                  style={{ 
                    cursor: primaryLink === '#' ? 'default' : 'pointer',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    if (primaryLink !== '#') {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <article>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h3>
                    {(project as any).period && (
                      <p className="text-xs mb-2" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                        {(project as any).period}
                      </p>
                    )}
                    <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 rounded-md"
                          style={{ 
                            background: 'var(--background)', 
                            color: 'var(--muted)',
                            border: '1px solid var(--border)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="text-sm space-y-1" style={{ color: 'var(--muted)' }}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <span style={{ color: 'var(--foreground)' }}>→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </a>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="mt-20 pt-8 text-sm" 
          style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}
        >
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="mt-1">Next.js ile yapıldı.</p>
        </footer>

        </div>
      </main>
    </>
  );
}
