# Debug Guide

## Development Server

The development server should be running at: **http://localhost:3000**

✅ **Server is now running successfully!**

### Starting the Server

```bash
npm run dev
```

### Checking Server Status

1. Open your browser and navigate to: `http://localhost:3000`
2. Check the terminal for any error messages
3. The server typically takes 5-10 seconds to start

### Common Issues

#### Node.js Version Error
If you see: `You are using Node.js 18.20.2. For Next.js, Node.js version ">=20.9.0" is required.`

**Solution:**
- The project includes a `.nvmrc` file that automatically uses Node 20
- Use `nvm` (Node Version Manager):
  ```bash
  source ~/.nvm/nvm.sh
  nvm use
  npm run dev
  ```
- Or manually:
  ```bash
  nvm install 20
  nvm use 20
  npm run dev
  ```

#### Port Already in Use
If port 3000 is already in use:
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

#### Build Errors
If you encounter build errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## VS Code Debugging

### Debug Configurations

I've created debug configurations in `.vscode/launch.json`:

1. **Next.js: debug server-side** - Debug Node.js server-side code (automatically uses Node 20 via nvm)
2. **Next.js: debug client-side** - Debug React client-side code in Chrome
3. **Next.js: debug full stack** - Debug both server and client (automatically uses Node 20 via nvm)

### How to Use

1. Open VS Code/Cursor
2. Go to Run and Debug (Cmd+Shift+D)
3. Select "Next.js: debug server-side" or "Next.js: debug full stack"
4. Press F5 or click the green play button

**Note:** The debug configurations automatically load nvm and switch to Node 20 before starting the dev server. If you still see Node 18 errors:
- Make sure nvm is installed: `nvm --version`
- The debugger will automatically use Node 20 from `.nvmrc`

### Browser Debugging

1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Set breakpoints in your code
4. The debugger will pause at breakpoints

## Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation works between pages
- [ ] All links are functional
- [ ] Responsive design works on mobile
- [ ] Animations are smooth
- [ ] No console errors
- [ ] SEO metadata is correct (check page source)

## Performance Testing

Run Lighthouse audit:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target: Score > 90

## Network Debugging

Check network requests:
1. Open Chrome DevTools
2. Go to Network tab
3. Reload page
4. Check for failed requests or slow resources
