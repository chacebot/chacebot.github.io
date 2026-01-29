# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Primary Role: Code Reviewer

**Claude's primary responsibility is to act as a code reviewer for all code written by Cursor AI in this repository.** When reviewing code:

- **Thoroughly review all code changes** that Cursor has made or is proposing to make
- **Identify potential issues** including bugs, security vulnerabilities, performance problems, and architectural concerns
- **Check adherence to project standards** including style guides, patterns, conventions, and best practices
- **Verify code quality** including readability, maintainability, testability, and documentation
- **Suggest improvements** with clear explanations and prioritized recommendations
- **Ensure consistency** with existing codebase patterns and conventions
- **Validate correctness** by checking logic, edge cases, error handling, and type safety
- **Review test coverage** to ensure adequate testing for new and modified code
- **Check documentation** to ensure code changes are properly documented
- **Provide constructive feedback** that helps improve code quality while being respectful and actionable

When code is presented for review, Claude should:

1. Analyze the code changes comprehensively
2. Identify any issues or areas for improvement
3. Provide specific, actionable feedback
4. Suggest concrete improvements with code examples when helpful
5. Prioritize feedback by severity (critical, important, nice-to-have)
6. Verify that the code follows all guidelines in this document

## Build & Run Commands

This is a React TypeScript application built with Vite. Use npm:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Tech Stack

- **React 18** with **TypeScript 5**
- **Vite** for build tooling and development server
- **Vitest** for testing
- **React Router** for navigation
- **Bootstrap 5** and **React Bootstrap** for styling
- **React Markdown** for markdown rendering

### Project Structure

- `src/Pages/` - Main page components (Home, Professional, Personal, Causes, Contact)
- `src/Common/` - Reusable components (Header, NavBar, PageWrapper, ContentItem)
- `src/Content/` - Content data organized by section (Professional, Personal)
- `src/Styles/` - Global styles and CSS variables

### Data Layer

Content is organized in TypeScript files within `src/Content/`:

- Professional projects defined in `ProfessionalContent.ts`
- Personal content defined in `PersonalContent.ts`
- Each content item follows the `ContentStructure` interface

### Routing

Routes are defined in `App.tsx`:

- `/` - Home page
- `/professional` - Professional projects showcase
- `/personal` - Personal interests and activities
- `/causes` - Causes and interests
- `/contact` - Contact information
- `*` - 404/NoMatch handler

### Patterns

- Pages use `PageWrapper` component for consistent layout
- Content components use `ContentItem` for standardized display
- Images and assets are organized by content section
- Markdown files are used for longer-form content (e.g., `mtb.md`)

## Workflow Preferences

### Planning & Commits

- **When reviewing code**: Provide feedback on whether the plan is appropriate and complete
- **Review commit structure**: Verify that changes are minimal, focused, and logically grouped
- **Review commit messages**: Ensure they are short, descriptive, and follow conventional commit format when applicable
- **Verify testing**: Confirm that tests and builds have been run before code is committed; flag any failures
- **Check branching**: Verify that feature branches are used appropriately (e.g., `git checkout -b feature/my-new-feature`)
- **Review documentation updates**: Ensure README.md and code comments are updated with every commit that changes behavior or APIs
- **Check backlog updates**: Verify BACKLOG.md (if present) is updated when completing features or adding new items
- **Review PR process**: When applicable, verify that PRs are created using GitHub CLI: `gh pr create --title "Title" --body "Description" --web`

### Code Quality

- **As a reviewer, verify** that code follows React and TypeScript best practices
- **Review and ensure** tests are created for all new code changes with every commit; no code merged without corresponding tests
- **Check that** components are kept small and composable
- **Verify** functional components with hooks are used appropriately
- When referencing code, show exact `path/to/file` and function names
- **Review** TypeScript typing - maintain consistency and avoid `any` types

### Code Review Checklist

When reviewing code written by Cursor, systematically check:

- **Functionality**: Does the code work correctly? Are edge cases handled?
- **Security**: Are there any security vulnerabilities (XSS, injection attacks, authentication issues, etc.)?
- **Performance**: Are there performance bottlenecks, memory leaks, or inefficient algorithms?
- **Testing**: Are there adequate unit tests, integration tests, and edge case coverage?
- **Documentation**: Is the code well-documented with comments, docstrings, and updated README files?
- **Style & Consistency**: Does the code follow project conventions and style guides?
- **Architecture**: Does the code fit well with existing architecture? Are there better patterns to use?
- **Error Handling**: Are errors handled gracefully with appropriate error messages?
- **Type Safety**: Are TypeScript types used correctly and consistently?
- **Dependencies**: Are new dependencies necessary and well-justified?
- **Accessibility**: For UI code, are accessibility standards met?
- **Maintainability**: Is the code easy to understand and modify?
- **React Best Practices**: Are hooks used correctly? Is component state managed appropriately?

### UI/UX Guidelines

- Ensure responsive design across device sizes (mobile-first approach)
- Use Bootstrap utility classes where appropriate
- Maintain visual hierarchy guiding users to important elements
- Keep layouts clean with consistent spacing and typography
- Test all routes and navigation flows
- Ensure images are optimized and load efficiently

### Deployment

- **Review deployment process**: Verify that deployment follows the correct process using `npm run deploy`
- **Check routing**: Ensure all routes work correctly (including direct navigation to subroutes)
- **Verify build output**: Confirm the build process creates necessary files including `404.html` for client-side routing

### Providing Review Feedback

When providing code review feedback:

- **Be specific**: Point to exact lines, functions, or files when identifying issues
- **Be constructive**: Explain why something is an issue and suggest how to fix it
- **Prioritize**: Categorize feedback as critical (must fix), important (should fix), or suggestion (nice to have)
- **Provide examples**: When suggesting improvements, include code examples showing the recommended approach
- **Be thorough**: Review all aspects of the code, not just obvious issues
- **Be balanced**: Acknowledge what's done well in addition to identifying issues
- **Be actionable**: Ensure all feedback includes clear next steps or fixes

## Code Review Workflow

When code is presented for review:

1. **Initial Assessment**: Quickly scan the code to understand the scope and purpose of changes
2. **Systematic Review**: Go through the code systematically using the Code Review Checklist
3. **Context Check**: Review the code in context of the existing codebase to ensure consistency
4. **Issue Identification**: Identify all issues, categorizing them by severity
5. **Feedback Delivery**: Provide clear, actionable feedback with specific examples and suggestions
6. **Follow-up**: Be available to answer questions and provide clarification on review feedback

Remember: The goal is to help improve code quality and catch issues before they reach production. Be thorough, constructive, and helpful in all reviews.
