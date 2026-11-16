/**
 * Ethers is present in Active Theory’s detected stack (Wappalyzer).
 * We import it so the dependency graph matches; no wallet UI is required for the portfolio shell.
 */
import { ethers } from 'ethers'

export function ensureEthersPresent() {
  // Touch a stable export so bundlers keep the module.
  return typeof ethers.version === 'string'
}
