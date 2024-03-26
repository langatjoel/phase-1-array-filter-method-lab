
function findMatching(source, sought){
    return source.filter(
        (driversMatch) => driversMatch.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(drivers, drive){
    return drivers.filter(
        (driversMatch) => driversMatch.toLowerCase().indexOf(drive.toLowerCase()) === 0
    );

}

function matchName(drivers, drive){
    return drivers.filter((taxify) => taxify.name === drive)
}

