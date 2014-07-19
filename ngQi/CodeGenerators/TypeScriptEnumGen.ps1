# TypeScriptEnumGen - Generate TypeScript compatible enum statements from csv files. 

param($csvFile="ALProxies.csv",$enumName="ALProxies")

#Get current path of this script...assumes csv is relative to currently executing script. 
$invocation = (Get-Variable MyInvocation).Value
$directorypath = Split-Path $invocation.MyCommand.Path

Write-Host "Setting execution path to " $directorypath

cd $directorypath

$contentFile = ($directorypath + "\" + $csvFile); 

Write-Host "Getting contents of " $contentFile

$proxies = Get-Content $contentFile

$enumStr="enum " + $enumName + "{ None=0";

$proxies | % {

    $enumStr +=  ", " + $_; 
}

$enumStr +=  "}"; 

Write-Host "Generated enum statement: " + $enumStr;

$typeEnumFileName = "tsenum_" + $enumName + ".txt";

Write-Host "Generating typescript file: " $typeEnumFileName

$enumStr > "$directorypath\$typeEnumFileName"

Write-Host "Saved."
