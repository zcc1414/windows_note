#include <windows.h>
#include "SelfCheck.h"
#include "AntiApi.h"
#include <stdio.h>
#include "resource.h"

int main(void)
{
	
	HWND hwnd=GetForegroundWindow();//直接获得前景窗口的句柄 
	SendMessage(hwnd,WM_SETICON,ICON_BIG,(LPARAM)LoadIcon(NULL,(LPCTSTR)IDI_VM));    

	SelfCheck sc;
	CAntiApi AntiApi;
	char user[] = {0x75, 0x73, 0x65, 0x72, 0x33, 0x32, 0x2E, 0x64, 0x6C, 0x6C, 0x00};
	char Message[] = {0x4D, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x42, 0x6F, 0x78, 0x41, 0x00};
	char yamiede[] = {0xD1, 0xC5, 0xF3, 0xBA, 0xB5, 0xFB, 0x00};
	char failed[] = {0xCD, 0xD1, 0xBF, 0xC7, 0xCA, 0xA7, 0xB0, 0xDC, 0x00};
	char success[] = {0xCD, 0xD1, 0xBF, 0xC7, 0xB3, 0xC9, 0xB9, 0xA6, 0x00};
	char UnPack[] = {0xBF, 0xEC, 0xC0, 0xB4, 0xCD, 0xD1, 0xCE, 0xD2, 0xD1, 0xBE, 0xA3, 0xA1, 0x00};
	AntiApi.AntiCC(user, Message);
	AntiApi.AntiHardware();
	AntiApi.AntiPage_Protect(user, Message);
	
	
	if (sc.IsFileModified_By_CRC32() || sc.IsFileModified_By_FileSize())
	{
		ExitProcess(0);
	}
	MessageBoxA(NULL, UnPack, yamiede, MB_OK);
	return 0;
}