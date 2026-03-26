export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*): (.+) \(#(\d+)\)$/,
      headerCorrespondence: ['type', 'subject', 'ticket'],
    },
  },
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix', 
        'docs', 
        'style', // 코드 포맷팅, 세미콜론 누락 등 기능 변경 없는 스타일 수정
        'refactor',
        'test', 
        'chore', 
        'remove', 
        'design', // UI/UX, 퍼블리싱 등 화면 관련 디자인 작업
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case', 'sentence-case']],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 72],

    'body-leading-blank': [1, 'always'],
  },
}
