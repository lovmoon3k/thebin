#ifndef CONFIG_H
#define CONFIG_H

#include "StdAfx.h"

// Various keys
#define X_CORE_KEY 		(BYTE )0x96			// Core XOR encryption key
#define X_PTR_KEY		(DWORD)0xAE1979DD	// Pointer XOR key
#define X_STRING_KEY	(WORD )0xAE12		// String XOR encryption key

// Module encryption config
#define X_SIGNATURE 	(DWORD)0xAE39120D	// Signature located before the header
#define X_SECTION_NAME	".stub"				// Section name where the module is located

// Module activation config
#define ENTRY_FUNC		(LPCSTR)15			// Module's function to call in order to activate the main routine

// Macro for debug print
#ifdef _DEBUG
#	define DEBUG_P(s) { OutputDebugString(TEXT(s"\n")); }
#else
#	define DEBUG_P(s)
#endif // DEBUG

#endif // CONFIG_H