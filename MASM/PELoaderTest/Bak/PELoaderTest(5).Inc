
include windows.inc
include kernel32.inc
include user32.inc
include Comctl32.inc
include shell32.inc
include comdlg32.inc

includelib kernel32.lib
includelib user32.lib
includelib Comctl32.lib
includelib shell32.lib
includelib comdlg32.lib

DlgProc	 PROTO	:HWND,:UINT,:WPARAM,:LPARAM

JudgePE    proto   pMem : LPVOID                     ;�ж��Ƿ���PE�ļ� 
FixImport  proto   pMem : dword                      ;�޸�PE�ļ��������    
FixReloc   proto   pMem : dword                      ;�޸������ض�λ��ַ       
LoadPE     proto   pMem : dword, pPEFile    : dword  ;����PE�ļ����ڴ�
FindOep    proto   pMem : dword                      ;�ҵ�PE�ļ�����ڵ� 
MyGetProcAddress  proto   hModule : dword, dFuncName : dword
.const

IDD_DIALOG1			equ 101
IDC_BN_FILEOP                   equ 1001
IDC_ED_FILE                     equ 1002
IDC_BN_LOAD                     equ 1003
IDC_BN_TEST                     equ 1004
.data
g_szMsgTxt   db "Sunny 2013",0
g_szMsgTitle db "hint",0

g_szErrorMsg db "Error",0
g_szNotPeMsg db "���ļ�����PE��ʽ",0
g_szNoMem    db "�ڴ�������",0
g_stOfn      OPENFILENAME  <>
g_szFilter   db "ExE files",0,"*.exe",0,"All files",0,"*.*",0,0
g_szCurDir   db ".",0
g_cFname     db MAX_PATH dup (0)
g_hFile      dd 0
g_dImageSize dd 0  ;PE�ļ����ڴ��е�ӳ���С 
g_dFileSize  dd 0  ;PE�ļ���Ӳ���ϵ�ԭʼ��С
g_hMap       dd 0  ;PE�ļ����ڴ�ӳ���ļ����
g_pMap       dd 0  ;PE�ļ����ڴ�ӳ���ļ��ĵ�ַ 
g_pLoadMem   dd 0  ;PE�ļ���װ�ص�ַ
;#########################################################################

.data?

hInstance			dd ?

;#########################################################################