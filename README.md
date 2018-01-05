PIP2 MPS Ring Pickup Display
=======
This web page uses the [Fermilab WebDPM library][1] to access live accelerator data at a rate up to 15Hz.

This display is a mirror of the [existing synoptic display][2] with the advantage of a higher data refresh rate.

The purpose of this display is to show the current and latched tripped values of the ring pickups at PIP2IT as well as offering convenient reset and threshold adjusting capabilities.

## Guidance

* Style should be structured in a css file
* A Plot instance should be associated with an svg element
  * svg width and height attributes should be set on the element

______
This project is lovingly developed by Beau Harrison <beau@fnal.gov>

[1]: https://cdcvs.fnal.gov/redmine/projects/acsys-dpm/wiki/WebDPM_Apps
[2]: http://www-bd.fnal.gov/synoptic/display/Work_in_progress/PXIE_MPS/PXIERingPickupProtection