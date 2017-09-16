package com.voidx.beacona.activity;

import android.app.Fragment;
import android.app.FragmentManager;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v13.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.inputmethod.InputMethodManager;

import com.voidx.beacona.R;
import com.voidx.beacona.fragment.CartFragment;
import com.voidx.beacona.fragment.MapFragment;
import com.voidx.beacona.fragment.NotificationFragment;
import com.voidx.beacona.fragment.SettingsFragment;

public class MainActivity extends AppCompatActivity implements CartFragment.OnFragmentInteractionListener,
        MapFragment.OnFragmentInteractionListener, NotificationFragment.OnFragmentInteractionListener,
SettingsFragment.OnFragmentInteractionListener{

    /**
     * The {@link android.support.v4.view.PagerAdapter} that will provide
     * fragments for each of the sections. We use a
     * {@link FragmentPagerAdapter} derivative, which will keep every
     * loaded fragment in memory. If this becomes too memory intensive, it
     * may be best to switch to a
     * {@link android.support.v4.app.FragmentStatePagerAdapter}.
     */
    private SectionsPagerAdapter mSectionsPagerAdapter;

    /**
     * The {@link ViewPager} that will host the section contents.
     */
    private ViewPager mViewPager;

    private static final String TAG = "MainActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mSectionsPagerAdapter = new SectionsPagerAdapter(getFragmentManager());

        mViewPager = (ViewPager) findViewById(R.id.container);
        mViewPager.setAdapter(mSectionsPagerAdapter);

        TabLayout tabLayout = (TabLayout) findViewById(R.id.tabs);
        tabLayout.setupWithViewPager(mViewPager);

        //Set tab icons
        tabLayout.setupWithViewPager(mViewPager);
        tabLayout.getTabAt(0).setIcon(R.drawable.map_light);
        tabLayout.getTabAt(1).setIcon(R.drawable.cart_blue);
        tabLayout.getTabAt(2).setIcon(R.drawable.notifications_light);
        tabLayout.getTabAt(3).setIcon(R.drawable.settings_light);

        //Set tab text null
        tabLayout.getTabAt(0).setText(null);
        tabLayout.getTabAt(1).setText(null);
        tabLayout.getTabAt(2).setText(null);
        tabLayout.getTabAt(3).setText(null);

        //Select map tab
        TabLayout.Tab toSelectTab = tabLayout.getTabAt(1);
        toSelectTab.select();

        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                int pos = tab.getPosition();
                switch (pos) {
                    case 0:
                        tab.setIcon(R.drawable.map_blue);
                        break;
                    case 1:
                        tab.setIcon(R.drawable.cart_blue);
                        break;
                    case 2:
                        tab.setIcon(R.drawable.notifications_blue);
                        break;
                    case 3:
                        tab.setIcon(R.drawable.settings_blue);
                        break;
                }
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {
                int pos = tab.getPosition();
                switch (pos) {
                    case 0:
                        tab.setIcon(R.drawable.map_light);
                        break;
                    case 1:
                        tab.setIcon(R.drawable.cart_light);
                        break;
                    case 2:
                        tab.setIcon(R.drawable.notifications_light);
                        break;
                    case 3:
                        tab.setIcon(R.drawable.settings_light);
                        break;
                }
            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onSearchFragmentInteraction(Uri uri) {

    }

    @Override
    public void onMapFragmentInteraction(Uri uri) {

    }

    @Override
    public void onVolunteerFragmentInteraction(Uri uri) {

    }

    @Override
    public void onProfileFragmentInteraction(Uri uri) {

    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    public void onClickAddItemButton(View view) {
        InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(view.getWindowToken(), 0);

        CartFragment fragment = CartFragment.getInstance();
        fragment.addCard(fragment.getAddItemText());
        fragment.clearAdd();
    }

    public class SectionsPagerAdapter extends FragmentPagerAdapter {

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            switch (position) {
                case 0:
                    return MapFragment.newInstance();
                case 1:
                    return CartFragment.newInstance();
                case 2:
                    return NotificationFragment.newInstance();
                case 3:
                    return SettingsFragment.newInstance();
                default:
                    return null;
            }
        }

        @Override
        public int getCount() {
            return 4;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            switch (position) {
                case 0:
                    return "Map";
                case 1:
                    return "Cart";
                case 2:
                    return "Notifications";
                case 3:
                    return "Settings";
                default:
                    return null;
            }
        }
    }
}
