#!/bin/bash
# To replace component names run -> bash new.sh base <newComponentName> 

search=$1
replace=$2
dir=../$replace
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`

if [ -d "$dir" ]; then
    echo "${RED}ERROR:${RESET} Component with name $replace exist, choose different name"
else 
    cd ..
    cp -R ${search} ${replace}
    cd ${replace}

    for f in *
    do
        if [ "$f" == "new.sh" ] ; then
                continue;
        fi
        sed -i "s/${search^}ExComponent/${replace^}ExComponent/g" $f
        sed -i "s/${search}/${replace}/g" $f
        mv "$f" ${f/${search}/${replace}}
        echo "File name changed to ${f/${search}/${replace}}"
    done

    # Add component to HTML file
    echo "<c-${replace}></c-${replace}>" >> ${replace}.component.html

    rm new.sh
fi

exComponent=${replace^}ExComponent,
component=${replace^}Component,
importEx="import \{ ${exComponent} \}  from \'.\/examples\/${replace}\/${replace}.component\'";

cd ../../
sed -i "/Examples imports addedByScript/ a ${importEx}" app.component.ts
sed -i "/Components imports addedByScript/ a ${component}" app.component.ts

sed -i "/Components added by script/ a ${exComponent}" app.component.ts

sed -i "/Declarations added by script/ a ${exComponent}" app.component.ts
sed -i "/Declarations added by script/ a ${component}" app.component.ts
sed -i "/Entries added by script/ a ${exComponent}" app.component.ts




