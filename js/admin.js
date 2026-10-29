/**
 * منطق التحقق من صلاحيات السوبر أدمن لمنصة ضغطة (Daghta Super Admin Guard)
 */

export const SUPER_ADMIN_EMAILS = [
  'daghtaplatform@gmail.com'
];

/**
 * فحص ما إذا كان البريد يتبع قائمة السوبر أدمن
 * @param {string} email
 * @returns {boolean}
 */
export function isSuperAdminEmail(email) {
  if (!email) return false;
  const clean = email.toLowerCase().trim();
  return SUPER_ADMIN_EMAILS.some(e => e.toLowerCase().trim() === clean);
}
