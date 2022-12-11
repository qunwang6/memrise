module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],
  },
  prompt: {
    messages: {
      type: 'Type of change:',
      scope: 'Scope (optional):',
      customScope: 'New Scope:',
      subject: 'Commit Message:',
    },
    types: [
      { value: 'feat', name: 'feat:      ✨  New feature', emoji: '✨' },
      { value: 'fix', name: 'fix:       🐛  Bug fix', emoji: '🐛' },
      { value: 'docs', name: 'docs:      📝  Documentation', emoji: '📝' },
      { value: 'style', name: 'style:     💄  Styling', emoji: '💄' },
      { value: 'refactor', name: 'refactor:  ♻️   Refactoring', emoji: '♻️' },
      { value: 'perf', name: 'perf:      ⚡️  Performance', emoji: '⚡️' },
      { value: 'test', name: 'test:      ✅  Testing', emoji: '✅' },
      { value: 'build', name: 'build:     📦️  Build and deps', emoji: '📦️' },
      { value: 'ci', name: 'ci:        🎡  CI', emoji: '🎡' },
      { value: 'chore', name: 'chore:     🔨  Other changes', emoji: '🔨' },
      { value: 'revert', name: 'revert:    ⏪️  Reverts previous commit', emoji: '⏪️' },
    ],
    useEmoji: true,
    upperCaseSubject: true,
    customScopesAlias: 'new',
    skipQuestions: ['body', 'breaking', 'footerPrefix', 'footer', 'confirmCommit'],
  },
};
