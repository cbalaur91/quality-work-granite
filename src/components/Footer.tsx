export function Footer() {
  return (
    <footer className="w-full py-4 mt-auto border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Powered by{' '}
          <a 
            href="https://aiwebhub.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            AiWebHub
          </a>{' '}
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
} 