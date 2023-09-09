export const lightboxStyles = {
  icon: {
    color: '#F4F4EF',
    width: 24,
  },
  container: {
    background: '#0c0014c7',
    fontSize: '14px',
  },
  thumbnails: {
    position: 'bottom' as const,
    width: 120,
    height: 80,
    border: 0,
    borderRadius: 4,
    gap: 8,
    showToggle: false,
    imageFit: 'cover' as const,
  },
  thumbnailContainer: { background: '#0c0014c7' },
  thumbnailBackground: { background: '#1A0F21' },
  counterContainer: {
    top: 'unset' as const,
    bottom: 0,
    right: 0,
    textAlign: 'right' as const,
  },
}
