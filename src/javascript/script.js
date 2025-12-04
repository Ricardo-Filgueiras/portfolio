/* Scripts extraídos de index.html (executados no fim do body) */

// 1. Substituir ícones do Feather Icons
if (typeof feather !== 'undefined') {
	feather.replace();
}

// 2. Animação "Fade In" ao rolar (Intersection Observer)
const animatedSections = document.querySelectorAll('.animated-section');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;

			const delay = entry.target.style.animationDelay || '0ms';
			entry.target.style.animationDelay = delay;

			observer.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.1
});

animatedSections.forEach((section, index) => {
	if (section.id !== 'hero') {
		section.style.animationDelay = `${index * 100}ms`;
	}
	observer.observe(section);
});

// ==== YouTube thumbnails -> Lightbox (modal) ====
function getYouTubeID(url) {
	const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
	const match = url.match(regExp);
	return match ? match[1] : null;
}

function openVideoModal(videoUrl) {
	const id = getYouTubeID(videoUrl);
	if (!id) return;

	// Create backdrop
	const backdrop = document.createElement('div');
	backdrop.className = 'video-modal-backdrop';
	backdrop.setAttribute('role', 'dialog');
	backdrop.setAttribute('aria-modal', 'true');

	// Content wrapper
	const content = document.createElement('div');
	content.className = 'video-modal-content relative';

	const iframe = document.createElement('iframe');
	iframe.width = '100%';
	iframe.height = '540';
	iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
	iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
	iframe.allowFullscreen = true;
	iframe.style.borderRadius = '8px';

	const closeBtn = document.createElement('button');
	closeBtn.className = 'video-modal-close';
	closeBtn.innerText = '✕';
	closeBtn.setAttribute('aria-label', 'Fechar vídeo');

	closeBtn.addEventListener('click', () => {
		document.body.removeChild(backdrop);
		document.body.style.overflow = '';
	});

	backdrop.addEventListener('click', (e) => {
		if (e.target === backdrop) {
			closeBtn.click();
		}
	});

	// Close on ESC
	function escHandler(e) {
		if (e.key === 'Escape') {
			if (document.body.contains(backdrop)) {
				document.body.removeChild(backdrop);
				document.body.style.overflow = '';
				document.removeEventListener('keydown', escHandler);
			}
		}
	}

	content.appendChild(closeBtn);
	content.appendChild(iframe);
	backdrop.appendChild(content);
	document.body.appendChild(backdrop);
	document.body.style.overflow = 'hidden';
	document.addEventListener('keydown', escHandler);
}

// Attach listeners to all elements with class 'youtube-thumb'
document.querySelectorAll('.youtube-thumb').forEach(btn => {
	btn.addEventListener('click', (e) => {
		const url = btn.getAttribute('data-video-url');
		if (url) {
			openVideoModal(url);
		}
	});
});

