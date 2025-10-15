// Test script to verify all upgrade levels work correctly
// Run this in the browser console to test different upgrade levels

console.log('=== AIQX Upgrade Level Testing ===');
console.log('');

// Test function to set upgrade level and reload
function testUpgradeLevel(level) {
    localStorage.setItem('aiqx_upgrade_level', level.toString());
    console.log(`✅ Set upgrade level to ${level}`);
    
    const details = {
        0: { hours: 3, theme: 'Golden (default)', nextUpgrade: '6 hours for 6 AIQX' },
        1: { hours: 6, theme: 'Green', nextUpgrade: '12 hours for 12 AIQX' },
        2: { hours: 12, theme: 'Purple', nextUpgrade: '24 hours for 24 AIQX' },
        3: { hours: 24, theme: 'Orange', nextUpgrade: 'MAXIMUM LEVEL REACHED' }
    };
    
    const info = details[level];
    console.log(`   - Timer: ${info.hours} hours`);
    console.log(`   - Theme: ${info.theme}`);
    console.log(`   - Next upgrade: ${info.nextUpgrade}`);
    console.log('');
    console.log('Reload the page to see the changes.');
}

// Display current level
const currentLevel = parseInt(localStorage.getItem('aiqx_upgrade_level') || '0');
console.log(`Current upgrade level: ${currentLevel}`);
console.log('');

// Instructions
console.log('To test different levels, run:');
console.log('  testUpgradeLevel(0) - Default golden theme (3 hours)');
console.log('  testUpgradeLevel(1) - Green theme (6 hours)');
console.log('  testUpgradeLevel(2) - Purple theme (12 hours)');
console.log('  testUpgradeLevel(3) - Orange theme (24 hours)');
console.log('');

// Make function globally available
window.testUpgradeLevel = testUpgradeLevel;