#!/bin/bash
echo 'Welcome Developer!'
firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}
echo 'Build: '$version

echo 'enter “1” (for yes) to continue and “0” (for no) to exit.'
read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  for filename in source/*
  do
    if [ $filename == 'source/changelog.md' ]
    then
      echo 'Not copying..' $filename
    else
      echo 'Copying..' $filename
      cp $filename build/.
    fi
  done
  cd build/
  echo 'Files in build directory of version..' $version
  ls
  # Done
else
  echo 'Please come back when you are ready'
fi
